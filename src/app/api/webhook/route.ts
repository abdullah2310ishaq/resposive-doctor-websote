import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

if (!stripeSecretKey) {
  console.warn("STRIPE_SECRET_KEY is not set. Webhook will not work.");
}

const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2025-11-17.clover",
    })
  : null;

export async function POST(req: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured." },
      { status: 500 }
    );
  }

  if (!webhookSecret) {
    console.warn("STRIPE_WEBHOOK_SECRET is not set. Webhook signature verification will be skipped.");
  }

  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event: Stripe.Event;

  try {
    // Verify webhook signature if webhook secret is provided
    if (webhookSecret && signature) {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } else {
      // If no webhook secret, parse the event without verification (not recommended for production)
      event = JSON.parse(body) as Stripe.Event;
      console.warn("Webhook signature verification skipped. This is not secure for production!");
    }
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  // Handle the event
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        
        console.log("✅ Payment successful!");
        console.log("Session ID:", session.id);
        console.log("Customer Email:", session.customer_email);
        console.log("Amount Total:", session.amount_total);
        console.log("Payment Status:", session.payment_status);

        // TODO: Add your business logic here:
        // - Send confirmation email to customer
        // - Update database with purchase
        // - Send notification to admin
        // - Create appointment/booking
        // etc.

        break;
      }

      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("✅ Async payment succeeded:", session.id);
        // Handle async payment success (e.g., bank transfers)
        break;
      }

      case "checkout.session.async_payment_failed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("❌ Async payment failed:", session.id);
        // Handle async payment failure
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

