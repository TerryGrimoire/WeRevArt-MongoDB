const nodemailer = require("nodemailer");
require("dotenv").config();

class MailController {
  static sendMail = (req, res) => {
    const { Name, Email, Message, Sujet } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SENDIN,
      port: process.env.SMTP_PORT_SENDIN,
      secure: false,
      auth: {
        user: process.env.SMTP_SENDIN_USER,
        pass: process.env.SMTP_SENDIN_PASSWORD,
      },
    });

    const mailOptions = {
      from: Email,
      to: "quentin.billac2@gmail.com",
      subject: "New message from contact form",
      text: `Name: ${Name} \n\n Email: ${Email} \n\n  subject: ${Sujet} \n\n ${Message} `,
      html: `<p>${Message}</p>  <p>Name: ${Name}</p> <p> subject: ${Sujet} </p> <p>Email: ${Email}</p>`,
    };

    return transporter
      .sendMail(mailOptions)
      .then((info) => {
        console.warn(info);
        res.status(200).send("Message sent");
      })
      .catch((err) => {
        console.warn(err);
        res.status(500).send("Something went wrong");
      });
  };
}

module.exports = MailController;
