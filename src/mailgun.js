import mailgun from "mailgun-js";
import { config } from "dotenv";
config();

const api_key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const mg = mailgun({ apiKey: api_key, domain: domain });

export function sendEmail(subject, body) {
  var data = {
    from: process.env.MAILGUN_FROM,
    to: process.env.MAILGUN_TO,
    subject: subject,
    html: body,
  };

  mg.messages().send(data, function (error, body) {
    if (error) {
      console.error(error);
    }
  });
}
