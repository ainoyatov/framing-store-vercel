'use client'

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export type FormDataPoints = {
  name?: string
  email?: string
  phone?: string
  purpose?: string
  message?: string
  token?: string
}

export default function ContactFormDesktop() {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const FormAction = async (formData: FormData) => {
    if (!executeRecaptcha) return

    // Run ReCAPTCHA
    const token = await executeRecaptcha('contact_form')

    // Build payload
    const payload: FormDataPoints = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      purpose: formData.get('purpose') as string,
      message: formData.get('message') as string,
      token,
    }

    const verifyCaptcha = await fetch('/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await verifyCaptcha.json()

    if (data.status === 'ok') {
        const sendMail = await fetch('/api/resend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const { success, message } = await sendMail.json();
         
        if (success) {
            alert(message);
            window.location.reload();
        } else {
            alert(message);
        }

    }

  }

  return (

    <form action={FormAction}>
      <div className="flex-1 flex justify-center p-4">
        <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-white bg-opacity-70">
          
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Contact Form
          </h2>

          <div className="space-y-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600"
              required
            />

            {/* Phone */}
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600"
              required
            />

            {/* Purpose */}
            <input
              type="text"
              name="purpose"
              placeholder="Purpose"
              className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 rounded-md bg-white bg-opacity-50 border border-gray-300 text-black placeholder-gray-600"
              required
            />

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-black p-3 rounded-md text-white font-bold hover:bg-gray-800 transition-all"
              >
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    </form>
  )
}