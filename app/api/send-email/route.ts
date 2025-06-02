import { NextResponse } from 'next/server';
import { Resend } from 'resend'; // adjust import as needed

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: 'yourdomain@resend.dev', // TODO: change to actual domain
      // to: 'vmpsales@amequipment.com',
      to: 'millerjoshua737@gmail.com', // for testing
      replyTo: body.email,
      subject: body.subject,
      html: `<div>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <hr />
        <div>${body.message}</div>
      </div>`,
    });

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
