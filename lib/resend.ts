import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactNotification(data: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = data;

  try {
    const result = await resend.emails.send({
      from: "HAVS <notifications@havs.dk>",
      to: ["david@havs.dk"],
      subject: `Ny kontaktforespørgsel fra ${name}`,
      text: `Navn: ${name}\nEmail: ${email}\nBesked: ${message}`,
      replyTo: email,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return { success: false, error: result.error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Resend exception:", error);
    return { success: false, error: "Fejl ved afsendelse af email" };
  }
}
