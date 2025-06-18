import { NextResponse } from 'next/server';
import { Resend } from 'resend'; // adjust import as needed

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let recipient;

    if (body.recipient === 'a&mAR') {
      recipient = 'techsales@amequipment.com';
    } else if (body.recipient === 'a&mVM') {
      recipient = 'vmpsales@amequipment.com';
    } else {
      recipient = 'sales@newtonvas.com';
    }

    const data = await resend.emails.send({
      from: 'website@amequipment.com',
      to: recipient,
      replyTo: body.email,
      subject: body.subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #444; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Phone:</strong> ${body.phone}</p>
            <p><strong>Email:</strong> ${body.email}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <h3 style="color: #444; margin-top: 0;">Message</h3>
            <div style="white-space: pre-wrap;">${body.message}</div>
          </div>
        </div>
      `,
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
