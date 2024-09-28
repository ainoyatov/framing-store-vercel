export type FormDataPoints = {
  name: string;
  email: string;
  phone: string;
  purpose: string;
  message: string;
}

export async function sendEmail({name, email, phone, purpose, message}:FormDataPoints) {
  const apiEndpoint = 'api/email'

  const push = await fetch('/api/email', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({name, email, phone, purpose, message})
  })
  
}
