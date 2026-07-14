import { ContactFormEmail } from '../../components/emails/ContactFormEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'PocketSized <hello@mail.gopocketsized.com>', 
      to: ['nick.fasulo@gopocketsized.com', 'inny.taylor@gopocketsized.com'], 
      subject: `New Lead: Inquiry from ${name}`,
      replyTo: email,
      react: <ContactFormEmail name={name} email={email} message={message} />,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("❌ Contact Form API Error:", err);

    const errorMessage = err instanceof Error ? err.message : 'Unknown backend runtime error';

    return Response.json(
      { 
        success: false, 
        error: errorMessage,
        hint: "Check your local server terminal logs for the full stack trace."
      }, 
      { status: 500 }
    );
  }
}