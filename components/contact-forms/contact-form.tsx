'use client'

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useState } from 'react'
import { sendEmail } from '../../utils/send-email'

export type FormDataPoints = {
  name?: string
  email?: string
  phone?: string
  purpose?: string
  message?: string
  token?: string
}

export default function ContactFormDesktop() {
  const [state, setState] = useState({})
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

    const res = await fetch('/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    setState(data)
    sendEmail(data)

    if (data.status === 'ok') {
      setTimeout(() => window.location.reload(), 2000)
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
              placeholder="Full Name"
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

//   return (
//     <form action={FormAction} className="space-y-4 p-4 ">
//         <div className='mb-2'>
//            <input
//             type="text"
//             name="name"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-lg lg:text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
//             placeholder="Name"
//             required
//           />
//         </div>

//         <div className="grid gap-4 mb-2 md:grid-cols-3 ">
//           <div>
//             <input
//               type="text"
//               name="phone"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-lg lg:text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
//               placeholder="Phone"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="email"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-lg lg:text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
//               placeholder="Email"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="purpose"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-lg lg:text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
//               placeholder="Purpose"
//               required
//             />
//           </div>
//         </div>

//         <div className="mb-2 ">
//           <textarea
//             name="message"
//             placeholder="Message"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-lg lg:text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
//             required
//           />
//         </div>
//         <button type="submit" className="bg-cyan-500 p-3 rounded-full text-white font-semibold">
//             Submit
//         </button>
//     </form>
//   )
// }
