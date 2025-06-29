import nodemailer from "nodemailer";
// Create a test account or replace with real credentials.

export const sendEmail =  async({email, emailType, userId}: any) => 
{
    try {
        //TODO: Replace this with your actual SMTP credentials.
        
    // Create a transporter object using the test account.
    // Note that you must use your real credentials in production.
    // Use SMTP transporter
    const transporter = nodemailer.createTransport({
    port: 465,
    secure: true, //true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    },
    });
   // Wrap in an async IIFE so we can use await.

    const mailOptions = {
       from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
       to: email,
      subject: emailType === "verify"? "Verify your email" : "Reset your password",
      text: "Hello world?", // plain‑text body
       html: "<b>Hello world?</b>", // HTML body
  }
  const mailResponse = await transporter.sendMail(mailOptions);
  return mailResponse;
   

        
    } catch (error: any)  {
        console.error("Error sending email", error);
        throw new Error("Failed to send email");
        
    }

}