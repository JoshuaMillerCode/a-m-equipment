import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: 'yourdomain@resend.dev', // TODO: change to actual domain
      // to: 'fieldservice@amequipment.com',
      to: 'sales@amequipment.com',
      replyTo: body.email,
      subject: `Field Service Request from ${body.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Field Service Request</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #444; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
            <p><strong>Company:</strong> ${body.company}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Phone:</strong> ${body.phone}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <h3 style="color: #444; margin-top: 0;">Service Details</h3>
            <div style="white-space: pre-wrap;">${body.message}</div>
          </div>
        </div>
      `,
    });

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Failed to send field service request' },
      { status: 500 }
    );
  }
}
