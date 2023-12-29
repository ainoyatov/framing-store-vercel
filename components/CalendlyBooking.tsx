'use client'

import React, { useEffect } from 'react'
import { InlineWidget } from 'react-calendly'

const CalendlyBooking = () => {

  return(
    <div>
      <div>
        <div className="text-yellow-500 text-4xl font-bold text-center flex justify-center mt-8 max-md:mt-10">
          Schedule Time
        </div>
        <div className="text-neutral-500  text-lg  text-center font-medium flex justify-center p-4 mb-8">
          In store visit? At home installation? Book your appointment now!
        </div>
      </div>

      <div className='p-2 sm:p-4 flex lg:justify-center w-screen h-screen'>
        <InlineWidget 
          url="https://calendly.com/guzal/installation"
          styles={{
            height: '100%', 
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}  
        />
      </div>
    </div>
  )

}

export default CalendlyBooking
