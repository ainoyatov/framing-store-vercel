import {type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const {captcha} = await request.json();
    const secret_key = process.env.RECAPTCHA_SECRET_KEY;
    console.log("Captcha received: ", captcha)
    console.log("Private key verified: ", secret_key)
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${captcha}`

    const response = await fetch(url)
        .then((res) => res.json())
            .then((google_response) => {if (google_response.success == true) {
                console.log("Captcha was verified by Google: ", google_response)
                return true;  
            } else {
                console.log("Captcha was NOT verified by Google: ", google_response)
                return false;
            }
        })
    console.log("Response sent back to Frontend: ", response)
    return NextResponse.json({response})
    
}




