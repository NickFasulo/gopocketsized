import { AutoResponderEmail } from '../../components/emails/AutoResponderEmail';
import { render } from '@react-email/render';

export async function GET() {
  const emailHtml = await render(<AutoResponderEmail name="Joe" />);

  return new Response(emailHtml, {
    headers: { 'Content-Type': 'text/html' },
  });
}