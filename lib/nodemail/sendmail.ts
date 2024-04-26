
import nodemailer from 'nodemailer';

interface EmailContent {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}
export const  sendEmail = async (
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

    //send email
    transporter.sendMail({
        from,
        to,
        subject,
        text,
        html
    }, (err) => {
        if (err) {
            console.log(err)
            return {
                error: err
            };
        }
        return {
            success: true
        };
    })
}