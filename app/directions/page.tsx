'use client'

import React from 'react'
import Maps from '@/components/Map'
import CustomButton from '@/components/CustomButton'

const Directions = () => {

  const handleScroll = () => {
    
    window.open('https://maps.app.goo.gl/zSCtCoUzRrvL4QA28?g_st=ic', '_blank')
  }

  return (
    <div className='mx-4 xs:px-4 md:px-14 grid xs:grid-cols-2'>
      
      <div className='flex flex-col justify-center xs:justify-start'>
        <h3 className='address__title my-4'>Store address</h3>
        <p className='address__subtitle'>8241 E. Evans Rd, Suite#102 </p> 
        <p className='address__subtitle'>Scottsdale, AZ 85260</p>

        <div>
          <CustomButton 
              title="Directions"
              containerStyles="address__button"
              handleClick={handleScroll}
          />
        </div>
          <h3 className='address__title my-4'>Store hours</h3>
          <p className='address__subtitle'>Monday - Friday: 10am - 5pm </p> 
          <p className='address__subtitle'>Saturdays: 11am - 3pm </p>
          <p className='address__subtitle'>Sundays: Closed </p>
        <div>

          {/* <div>
            <CustomButton 
                title="Directions"
                containerStyles="address__button"
                handleClick={handleScroll}
            />
          </div> */}

        </div>
      </div>
      
      <div className=' shadow-xl my-4 h-screen flex flex-col justify-center xs:mx-4 xs:justify-start xs:h-auto'>
        <Maps/>
      </div>
      

    </div>
  )
}

export default Directions