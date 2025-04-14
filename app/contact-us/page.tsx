import FigmaContactForm from '@/components/FigmaContactForm'
import React from 'react'
import Maps from '@/components/Map'
import { Metadata } from 'next'
import { Suspense } from 'react'
import LoadingDots from '@/components/shopify/utilities/loading-dots'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Got framing?, Got questions about custom framing?, Questions about picture framing costs in Scottsdale?',
  robots: {
    follow: true,
    index: true
  },
}

const ContactPage = () => {
  return (
    <Suspense fallback={
      <div className="flex justify-center text-2xl">
        <LoadingDots className="bg-cyan-500"/>
      </div>
    }>
    <div>
      <section>
        <div className='mb-16'>
          <FigmaContactForm />
        </div>
      </section>
      <section>
        <div className='flex flex-col p-2 lg:p-0 mb-16'>
          <div className='w-auto  xs:mt-[12rem] shadow-xl grid grid-cols-1 h-[40rem]'>
            <Maps />
          </div>
        </div>
      </section>
    </div>
    </Suspense>
  )
}

export default ContactPage;



// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
// import ContactFormDesktop from "@/components/contact-forms/contact-form";
// import { Metadata } from 'next'


// export const metadata: Metadata = {
//   title: 'Contact Us',
//   description: 'Get a quote. Ask a question. Book an appointment. Looking for expert framing services near Scottsdale? Contact our frame shop to get a custom quote, ask about our framing options, or schedule a consultation. Whether you need artwork, photos, or memorabilia framed, our team is here to help.',
//   robots: {
//     follow: true,
//     index: true
//   },
// }

// const ContactPage = () => {

//   return (
//     <div>
//     <div>
//       <div className="text-yellow-500 text-4xl font-bold text-center flex justify-center mt-8 max-md:mt-10">
//         Send us a message
//       </div>
//       <div className="text-neutral-500  text-lg  text-center font-medium flex justify-center p-4 mb-8">
//         We look forward to connecting with you.
//       </div>
//     </div>

//     <div className='p-2 sm:p-4 flex justify-center w-screen h-screen'>
//       <GoogleReCaptchaProvider 
//           reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA!}
//           scriptProps={{
//               async: true,
//               defer: true,
//               appendTo: 'head',
//               nonce: undefined,
//           }}
//       >
//           <ContactFormDesktop />
//       </GoogleReCaptchaProvider>
//     </div>
//   </div>
//   )
// }

// export default ContactPage;


