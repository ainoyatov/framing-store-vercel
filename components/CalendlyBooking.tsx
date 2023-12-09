'use client'

import React, { useEffect } from 'react'
import { InlineWidget } from 'react-calendly'

const CalendlyBooking = () => {

  return(
    <div className=' px-4 g:justify-center w-screen h-screen'>
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
  )

}

export default CalendlyBooking
