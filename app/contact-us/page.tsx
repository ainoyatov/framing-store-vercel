import FigmaContactForm from '@/components/FigmaContactForm'
import React from 'react'
import Maps from '@/components/Map'

const ContactPage = () => {
  return (
    <>
      <section>
        <div className=''>
          <FigmaContactForm />
        </div>
      </section>
      <section>
        <div className='flex flex-col shadow-xl'>
          <div className='w-auto xs:mt-[12rem] shadow-xl grid grid-cols-1 h-[40rem]'>
            <Maps />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage