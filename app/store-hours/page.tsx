import React from 'react'
import { Metadata } from "next";
import NextImage from 'next/image';


export const metadata: Metadata = {
  title: 'Store Hours',
  description: 'Frame shop store hours, open on weekdays, open Saturdays, closed Sundays',
  robots: {
    follow: true,
    index: true
  },
}

const StoreHoursPage = () => {
  return (
    <div>
      <div className="text-yellow-500 text-4xl font-bold text-center flex justify-center mt-8 max-md:mt-10">Store Hours</div>

      <div className='flex flex-col sm:flex-row py-16 px-8 justify-between'>
        <div className='flex flex-col'>
          <div className='flex justify-center text-3xl lg:text-4xl'>Mon - Fri</div>
          <div className='flex justify-center'>
            <NextImage 
              src='/weekday-working-hours.svg'
              alt='Weekday hours of operation'
              width={350}
              height={30}
            />
          </div>
          <div className='flex justify-center max-sm:hidden'>10:00 AM - 5:00 PM</div>
        </div>
        
        
        <div className='flex flex-col'>
          <div className='flex justify-center text-3xl lg:text-4xl'>Saturday</div>
          <div className='flex justify-center'>
            <NextImage 
              src='/weekend-working-hours.svg'
              alt='Saturday hours of operation'
              width={350}
              height={30}
            />
          </div>
          <div className='flex justify-center max-sm:hidden'>11:00 AM - 3:00 PM</div>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-center text-3xl lg:text-4xl'>Sunday</div>
          <div className='flex justify-center'>
            <NextImage 
              src='/sunday-work-hours.svg'
              alt='Sunday hours of operation'
              width={350}
              height={30}
            />
          </div>
          <div className='flex justify-center max-sm:hidden'>Day off</div>
        </div>
      </div>

    </div>
    
  );
}

export default StoreHoursPage