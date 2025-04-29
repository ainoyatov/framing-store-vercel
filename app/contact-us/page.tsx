import FigmaContactForm from '@/components/FigmaContactForm'
import React from 'react'
import Maps from '@/components/Map'
import { Metadata } from 'next'
import { Suspense } from 'react'
import LoadingDots from '@/components/shopify/utilities/loading-dots'
import ThirdParagraph from '@/components/ThirdParagraph'

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
        <LoadingDots className="bg-cyan-500" />
      </div>
    }>
      <div>
        <section>
          <div className="max-w-[100rem] mx-auto mb-8 p-2 sm:mb-0 sm:p-24">
            <ThirdParagraph />
          </div>
        </section>

        <section>
          <div className="flex flex-col p-2 lg:p-0 m-16 max-w-[100rem] mx-auto">
            <div className="w-auto shadow-xl grid grid-cols-1 h-[40rem]">
              <Maps />
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  )
}

export default ContactPage;


