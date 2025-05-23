'use client'

import { InlineWidget } from 'react-calendly'

const CalendlyBooking = () => {

  return(
    <div>
      <div>
        <div className="mt-8 max-md:mt-10 flex justify-center text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#026974] to-[#00a8e8] bg-clip-text text-transparent">
            Schedule Time
          </h1>
        </div>
        <div className="text-neutral-500  text-lg  text-center font-medium flex justify-center p-4 mb-8">
          In store visit? At home installation? Book your appointment now!
        </div>
      </div>

      <div className='p-2 sm:p-4 flex lg:justify-center w-screen h-screen'>
        <InlineWidget 
          url="https://calendly.com/custom-framing/30min"
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
