// server.js
// node src/emails/server.js

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Nainstalujte balíček dotenv (npm install dotenv) pro načítání proměnných prostředí z .env souboru

const port = process.env.PORT || 3001; // Definice portu
const app = express();


app.use(cors());
app.use(bodyParser.json());

// Konfigurace Nodemaileru
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_SERVER_USERNAME,
    pass: process.env.SMTP_SERVER_PASSWORD,
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER, // Adresa odesílatele (většinou stejná jako EMAIL_USER)
    to: 'hovorkapetr@gmail.com', // Adresa příjemce emailu
    subject: 'Nová zpráva z kontaktního formuláře',
    text: `Jméno: ${name}\nEmail: ${email}\nTelefon: ${phone}\nZpráva:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Chyba při odesílání emailu:', error);
      res.status(500).json({ message: 'Při odesílání emailu došlo k chybě.' });
    } else {
      console.log('Email úspěšně odeslán:', info.response);
      res.status(200).json({ message: 'Email byl úspěšně odeslán.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server běží na portu ${port}`);
});
