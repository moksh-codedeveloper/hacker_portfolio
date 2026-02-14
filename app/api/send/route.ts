import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { alias, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Keep this for now to test
      to: [process.env.MY_RECEIVING_EMAIL as string], 
      subject: `[PORTFOLIO_PING] from ${alias}`,
      html: `
        <div style="font-family: monospace; background: #000; color: #22c55e; padding: 20px; border: 1px solid #166534;">
          <h3>INCOMING_TRANSMISSION</h3>
          <hr style="border-color: #166534;" />
          <p><strong>SENDER:</strong> ${alias}</p>
          <p><strong>RETURN_PATH:</strong> ${email}</p>
          <p><strong>PAYLOAD:</strong></p>
          <p style="color: #fff;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}