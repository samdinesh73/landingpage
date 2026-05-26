import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, requirements, preferredLanguage, servicesInterested } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.GOOGLE_EMAIL,
      to: process.env.ADMIN_EMAIL || 'admin@sellerrocket.in',
      subject: `New Call Booking Request: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Call Booking Request</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
            ${requirements ? `<p><strong>Requirements:</strong> ${requirements}</p>` : ''}
            ${preferredLanguage ? `<p><strong>Preferred Language:</strong> ${preferredLanguage}</p>` : ''}
            ${servicesInterested && servicesInterested.length > 0 ? `<p><strong>Services Interested In:</strong><br/>${servicesInterested.join(', ')}</p>` : ''}
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p><em>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</em></p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Call booking request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    );
  }
}
