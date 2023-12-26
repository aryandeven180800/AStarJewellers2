// emailcontroller.js

import emailService from '../services/emailService.js';

export const sendEmailController = async (req, res) => {
  try {
    const result = await emailService.sendMail();
    res.status(200).json({ message: 'Email is sent', result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
