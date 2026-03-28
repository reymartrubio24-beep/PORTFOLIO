const express = require('express');
const router = express.Router();
const sendMail = require('../utils/mailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all fields.' });
  }

  try {
    // Send email using Nodemailer
    await sendMail({
      subject: `[PORTFOLIO CONTACT] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ status: 'Success', message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email. Check your SMTP settings.' });
  }
});

module.exports = router;
