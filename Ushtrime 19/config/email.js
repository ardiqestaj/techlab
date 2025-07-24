import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendWelcomeEmail = async (toEmail, name) => {
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);
  try {
    const info = await transporter.sendMail({
      from: `"Travel APP" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "Wellcom to Our Travel App",
      html: `<h2>Hi, ${name}</h2>
          <p>Welcome aboard! We're thrilled to have you.</p>
          <p>Let us know if you need anything.</p>
          <br>
          <strong> - Travel App Team <strong>`,
    });
    console.log("Welcome email sent:", info.messageId);
  } catch (error) {
    console.log(error, "error");
    throw error;
  }
};
