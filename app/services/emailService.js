// emailService.js

import nodemailer from 'nodemailer';
import oAuth2Client from '../models/emailmodel.js';

async function sendMail(toEmail, subject, text, html) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'aryandsheth@gmail.com',
        clientId: oAuth2Client._clientId,
        clientSecret: oAuth2Client._clientSecret,
        refreshToken: oAuth2Client.credentials.refresh_token,
        accessToken,
      },
    });

    const mailOptions = {
      from: 'Aryan  <aryandsheth@gmail.com>',
      to: toEmail,
      subject,
      text,
      html,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw error;
  }
}

export default { sendMail };
