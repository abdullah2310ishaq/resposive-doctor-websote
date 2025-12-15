import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.warn("STRIPE_SECRET_KEY is not set. Stripe checkout will not work.");
}

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2025-11-17.clover",
    })
  : null;

type SectionKey = "individual" | "joint";

// Map the offerings in the UI to concrete Stripe line-items.
// You can later swap these for real Stripe Price IDs if you prefer.
function getLineItem(section: SectionKey, title: string) {
  // amounts are in cents
  if (section === "individual") {
    if (title === "Single Sessions") {
      return {
        name: "Individual - Single Session (45 min)",
        amount: 13000,
      };
    }
    if (title === "Bundle 1") {
      return {
        name: "Individual - Bundle 1 (8 sessions)",
        amount: 100000,
      };
    }
    if (title === "Bundle 2") {
      return {
        name: "Individual - Bundle 2 (16 sessions)",
        amount: 200000,
      };
    }
  }

  if (section === "joint") {
    if (title === "Single Sessions") {
      return {
        name: "Joint - Single Session (60 min)",
        amount: 20000,
      };
    }
    if (title === "Bundle 1") {
      return {
        name: "Joint - Bundle 1 (5 sessions)",
        amount: 100000,
      };
    }
    if (title === "Bundle 2") {
      return {
        name: "Joint - Bundle 2 (10 sessions)",
        amount: 190000,
      };
    }
  }

  return null;
}

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured on the server." },
        { status: 500 }
      );
    }

    const body = (await req.json()) as
      | { section?: SectionKey; title?: string }
      | { items?: { section?: SectionKey; title?: string }[] };

    const lineItems: { name: string; amount: number }[] = [];

    // Support both single selection and multiple items
    if ("items" in body && Array.isArray(body.items) && body.items.length > 0) {
      for (const entry of body.items) {
        if (!entry.section || !entry.title) continue;
        const li = getLineItem(entry.section, entry.title);
        if (li) {
          lineItems.push(li);
        }
      }
    } else if ("section" in body && "title" in body && body.section && body.title) {
      const li = getLineItem(body.section, body.title);
      if (li) {
        lineItems.push(li);
      }
    }

    if (!lineItems.length) {
      return NextResponse.json(
        { error: "Missing or unknown offerings for checkout." },
        { status: 400 }
      );
    }

    const origin =
      req.headers.get("origin") ||
      req.headers.get("referer")?.split("/").slice(0, 3).join("/") ||
      "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems.map((li) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: li.name,
          },
          unit_amount: li.amount,
        },
        quantity: 1,
      })),
      success_url: `${origin}/offerings?status=success`,
      cancel_url: `${origin}/offerings?status=cancelled`,
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session." },
      { status: 500 }
    );
  }
}


