// emailRoutes.js

import express from 'express';
import emailService from '../services/emailService.js';

const router = express.Router();

router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Add additional validation if needed

    // Send a confirmation email to the user
    const subject = 'Subscription Confirmation';
    const text = 'Thank you for subscribing!';
    const html = '<h1>Thank you for subscribing!</h1>';

    await emailService.sendMail(email, subject, text, html);

    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
