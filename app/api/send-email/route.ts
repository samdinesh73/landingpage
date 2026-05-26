import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a reusable transporter with Google SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email } = await request.json();

    // Validate inputs
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to dev
    const mailOptions = {
      from: process.env.GOOGLE_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Lead: ${name}`,
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone/WhatsApp:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><em>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</em></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
