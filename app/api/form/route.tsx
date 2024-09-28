import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {

    //Form Data
    const data = await request.formData()
    const name = data.get('name') as string | null;
    const email = data.get('email') as string | null;
    const phone = data.get('phone') as string | null;
    const purpose = data.get('purpose') as string | null;
    const message = data.get('message') as string | null;

    //Form status
    const status = 'ok'
    const sent = true
    const msg = 'Your message has been sent.'

    const res = {

        name:name,
        email:email,
        phone:phone,
        purpose:purpose,
        message:message,
        status:status,
        sent:sent,
        msg:msg,

    }

    return NextResponse.json(res)
}