export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
};

export type Web3FormsResponse = {
  success: boolean;
  message: string;
};

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// Submit contact form to Web3Forms
export async function submitContact(payload: ContactPayload): Promise<Web3FormsResponse> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    return { success: false, message: "Missing Web3Forms key" };
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("subject", "New Contact Form Submission");
  formData.append("from_name", "Mana Of Arta Website");
  formData.append("name", payload.name);
  formData.append("email", payload.email);
  if (payload.phone) formData.append("phone", payload.phone);

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const data = (await res.json()) as { success: boolean; message?: string };
    return { success: !!data.success, message: data.message || (data.success ? "Message sent" : "Message not sent") };
  } catch {
    return { success: false, message: "Network error. Please try again later." };
  }
}


