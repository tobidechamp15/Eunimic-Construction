import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP host
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'localhost:3000 email', // sender address
      to: 'tobidechamp15@gmail.com', // list of receivers
      subject: 'New Contact Form Submission', // Subject line
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Message: ${body.message}
      `, // plain text body
      html: `
         <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
<img src="/public/assets/eunimic.png">         <h2 style="color: #d35400; text-align: center; border-bottom: 2px solid #d35400; padding-bottom: 10px;">
          Eunimic Construction</h2>
          <p style="font-size: 16px; color: #333;">You have received a new message from your website contact form:</p>
          <div style="background-color: #ffffff; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">
            <p><strong style="color: #d35400;">Name:</strong> ${body.name}</p>
            <p><strong style="color: #d35400;">Email:</strong> ${body.email}</p>
            <p><strong style="color: #d35400;">Subject:</strong> ${body.subject}</p>
            <p><strong style="color: #d35400;">Message:</strong></p>
            <p style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; color: #333; border: 1px solid #ddd;">${body.message}</p>
          </div>
          <p style="font-size: 14px; color: #777; margin-top: 20px;">This email was sent automatically from the NEunimic Construction website.</p>
        </div>
      `, // html body
    });

    console.log('Message sent: %s', info.messageId);

    return NextResponse.json(
      { message: 'Form submission received and email sent' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { message: 'Error processing form submission' },
      { status: 500 }
    );
  }
}
