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
  alternates: {
    canonical: 'https://artandcustomframes.com/contact-us'
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

export default ContactPage