
import { transform } from 'next/dist/build/swc';
import nodemailer from 'nodemailer';

interface EmailContent {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}
export const sendEmail = async (
    { from, to, subject, text, html }: EmailContent) => {

    const transporter = nodemailer.createTransport({
        port: 465,
        // service: 'gmail',
        host: "smtp.gmail.com",
        auth: {
            // user: process.env.EMAIL,
            // pass: process.env.EMAIL_PASS
            user: "dat198hp@gmail.com",
            pass: "oryd kskb bnbm amxw"
            //oryd kskb bnbm amxw

        },
        secure: true
    });

    await new Promise((resolve, reject) => {
        //send email
        transporter.sendMail({
            from,
            to,
            subject,
            text,
            html
        }, (err) => {
            console.log(err)
            reject(err)
        })
    })

}