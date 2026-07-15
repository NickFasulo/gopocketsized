import { ContactFormEmail } from '../../components/emails/ContactFormEmail';
import { AutoResponderEmail } from '../../components/emails/AutoResponderEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const [internalNotification, clientAutoResponder] = await Promise.all([
      resend.emails.send({
        from: 'PocketSized Leads <hello@mail.gopocketsized.com>', 
        to: ['nick.fasulo@gopocketsized.com', 'inny.taylor@gopocketsized.com'], 
        subject: `New Lead: Inquiry from ${name}`,
        replyTo: email,
        react: <ContactFormEmail name={name} email={email} message={message} />,
      }),
      resend.emails.send({
        from: 'PocketSized <hello@mail.gopocketsized.com>',
        to: [email],
        subject: 'We received your inquiry - PocketSized',
        react: <AutoResponderEmail name={name} />,
      })
    ]);

    if (internalNotification.error) {
      return Response.json({ error: internalNotification.error.message }, { status: 400 });
    }

    if (clientAutoResponder.error) {
      console.error("⚠️ Auto-responder failed to send:", clientAutoResponder.error.message);
    }

    return Response.json({ success: true, data: internalNotification.data }, { status: 200 });
  } catch (err: any) {
    console.error("❌ Contact Form API Error:", err);
    const errorMessage = err instanceof Error ? err.message : 'Unknown backend runtime error';
    
    return Response.json(
      { 
        success: false, 
        error: errorMessage,
        hint: "Check local server terminal logs for the full stack trace."
      }, 
      { status: 500 }
    );
  }
}