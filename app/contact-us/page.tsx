import ContactInfo from '@/components/ContactInfo'
import EmailInfo from '@/components/EmailInfo'
import React from 'react'
import Maps from '@/components/Map'
import CustomButton from '@/components/CustomButton'

const StoreHours = () => {
  return (
    <div className=''>
      <section className='px-4 py-4 flex justify-center'>
        <div className='flex flex-col items-center md:flex-row md:items-center '>
          <div className='w-auto mx-4 shadow-xl max-w-7xl'>
            <ContactInfo />
          </div>
          <div className='w-auto mt-12 mb-24 max-w-2xl'>
            <EmailInfo />
          </div>
        </div>
      </section>

      <section>
        <div className='flex flex-col shadow-xl'>
          <div className='w-auto xs:mt-[12rem] shadow-xl grid grid-cols-1 h-[40rem]'>
            <Maps />
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoreHours;