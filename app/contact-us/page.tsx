import FigmaContactForm from '@/components/FigmaContactForm'
import React from 'react'
import Maps from '@/components/Map'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us'
}

const ContactPage = () => {
  return (
    <>
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
    </>
  )
}

export default ContactPage