import nodemailer from "nodemailer";
import config from "../config";
import Transport from "nodemailer-brevo-transport";

export const Transporter = nodemailer.createTransport(
  new Transport({ apiKey: config.emailApiKey! })
);

// export const Transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: config.gmail_app_Email,
//         pass: config.emailPass
//     }
// });
