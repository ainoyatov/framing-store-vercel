import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()
  const token = data.token
  const secret = process.env.RECAPTCHA_SECRET_KEY_V3

  // Step 1: Verify with Google
  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  })

  const verifyData = await verifyRes.json()

  const {
    success,
    score,
    action,
    'error-codes': errorCodes,
  }: {
    success: boolean
    score?: number
    action?: string
    'error-codes'?: string[]
  } = verifyData

  const isHuman = success && score !== undefined && score >= 0.5
  const status = isHuman ? 'ok' : 'fail'

  if (!isHuman) {
    return NextResponse.json(
      {
        status,
        msg: 'reCAPTCHA verification failed',
        score,
        errors: errorCodes ?? [],
      },
      { status: 400 }
    )
  }

  const { name, email, phone, purpose, message } = data

  return NextResponse.json({
    name,
    email,
    phone,
    purpose,
    message,
    status,
    msg: 'Your message has been sent.',
    score,
  })
}