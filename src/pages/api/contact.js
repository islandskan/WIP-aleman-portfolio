/* eslint-disable import/no-anonymous-default-export */
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
export default async (req, res) => {
    const { from_fullname, from_email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: process.env.ACCESS_TOKEN,
            expires: process.env.EXPIRES,
        },
    });

    try {
        const emailRes = await transporter.sendMail({
            from: from_email,
            to: 'sigridureggertsdottir.art@gmail.com',
            subject: `aleman.se contact form: ${subject}`,
            html: `
            <p>${subject}</p>
            <br />
            ----
            <p>${message}</p>
            <br />
            ---
            <br />
            <p>Message from: ${from_fullname}</p>
            <p>Contact email: ${from_email}</p>
            `,
        });
        console.log('Message Sent', emailRes.messageId);
    } catch (error) {
        console.log(error);
    }
    res.status(200).json(req.body);
};
