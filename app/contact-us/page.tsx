import ContactInfo from '@/components/ContactInfo'
import EmailInfo from '@/components/EmailInfo'
import React from 'react'
import Maps from '@/components/Map'
import CustomButton from '@/components/CustomButton'

const StoreHours = () => {
  return (
    <div className='xs:mt-6'>
      <section>
        <div className='flex flex-col md:flex-row md:items-center drop-shadow-xl '>
          <div className='w-auto mx-4 max-lg:mt-16 shadow-xl '>
            <ContactInfo />
          </div>
          <div className='w-auto mt-12 mb-24'>
            <EmailInfo />
          </div>
        </div>
      </section>

      <section>
        <div className='flex flex-col max-:mx-4 shadow-xl ]'>
          <div className='w-auto xs:mt-[12rem] shadow-xl grid grid-cols-1 h-[40rem]'>
            <Maps />
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoreHours;