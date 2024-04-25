import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/nodemail/sendmail";
interface BodyReqestContact {
    email: string;
    message: string;
}
export async function GET(request: Request) {

    return new NextResponse(JSON.stringify({ msg: 'reply contact email' }))
}

export async function POST(request: NextRequest) {
    const res = await request.json();
    const { email, message } = res;

    await sendEmail({
        from: 'dat198hp@gmail.com',
        to: email,
        subject: "Contact from portfolio",
        text: "You have new contact",
        html: `
        <p>You have new contact</p>
        <p> from : ${email}</p>
        <p> message : ${message}</p>
        `,
    });
    
    console.log("REQUES IS    ", email)

    return NextResponse.json(res)
    //return NextResponse.json({ msg: 'reply contact email' });
}



