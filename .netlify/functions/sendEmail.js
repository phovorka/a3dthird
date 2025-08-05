const nodemailer = require("nodemailer");

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const { name, email, phone, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_SERVER_USERNAME,
        pass: process.env.SMTP_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_SERVER_USERNAME,
      to: "hovorkapetr@gmail.com",
      subject: "Nová zpráva z kontaktního formuláře",
      text: `Jméno: ${name}\nEmail: ${email}\nTelefon: ${phone}\nZpráva:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email byl úspěšně odeslán." }),
    };
  } catch (error) {
    console.error("Chyba při odesílání emailu:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Při odesílání emailu došlo k chybě." }),
    };
  }
};
