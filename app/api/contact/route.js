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
      from: '"Eunimic Construction" <contact@eunimic-construction.com>', // sender address
      to: 'tobidechamp15@gmail.com', // list of receivers
      replyTo: body.email, // User's email address for replies
      subject: 'Message from Eunimic Construction Contact Form', // Subject line
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Message: ${body.message}
      `, // plain text body
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 20px;">
            <img src="https://eunimic-construction.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feunimic.bca72dc9.png&w=640&q=75" alt="Eunimic Construction Logo" style="width: 100px;">
            <h2 style="color: #d35400; text-align: center; flex-grow: 1; margin-left: 20px; border-bottom: 2px solid #d35400; padding-bottom: 10px;">Eunimic Constructions</h2>
          </div>
          <p style="font-size: 16px; color: #333; margin-bottom: 20px;">You have received a new message from your website contact form:</p>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 20px;">
            <div style="margin-bottom: 20px;">
              <h3 style="font-size: 18px; color: #d35400; margin-bottom: 10px;">Sender Details:</h3>
              <p><strong style="color: #d35400;">Name:</strong> ${body.name}</p>
              <p><strong style="color: #d35400;">Email:</strong> ${body.email}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <h3 style="font-size: 18px; color: #d35400; margin-bottom: 10px;">Message:</h3>
              <p style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; color: #333; border: 1px solid #ddd;">${body.message}</p>
            </div>
          </div>
          <p style="font-size: 14px; color: #777; text-align: center; margin-top: 20px;">This email was sent automatically from the Eunimic Construction website. Please do not reply to this email.</p>
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
