import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Parse JSON body instead of formData
  const data = await request.json();

  const name = data.name || '';
  const email = data.email || '';
  const phone = data.phone || '';
  const purpose = data.purpose || '';
  const message = data.message || '';

  // Form status
  const status = 'ok';
  const sent = true;
  const msg = 'Your message has been sent.';

  const res = {
    name,
    email,
    phone,
    purpose,
    message,
    status,
    sent,
    msg,
  };

  console.log(res);

  return NextResponse.json(res);
}