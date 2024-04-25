
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // user: process.env.EMAIL,
        // pass: process.env.EMAIL_PASS
        user: "dat198hp@gmail.com",
        pass: "oryd kskb bnbm amxw" 
        //oryd kskb bnbm amxw

    }
});
interface EmailContent {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}
export const  sendEmail = async (
    { from, to, subject, text, html }: EmailContent) => {
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