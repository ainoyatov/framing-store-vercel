import React from 'react'
import { Metadata } from "next";
import NextImage from 'next/image';


export const metadata: Metadata = {
  title: 'Store Hours'
}

const page = () => {
  return (
    <div className='flex flex-col lg:flex-row py-16 justify-between'>
      <div className='flex flex-col'>
        <div className='flex justify-center sm:text-3xl lg:text-2xl'>Monday</div>
        <div className='flex justify-center'>
          <NextImage 
            src='/weekday-working-hours.svg'
            alt='Weekday hours of operation'
            width={350}
            height={30}
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-center sm:text-3xl lg:text-2xl'>Tuesday</div>
        <div className='flex justify-center'>
          <NextImage 
            src='/weekday-working-hours.svg'
            alt='Weekday hours of operation'
            width={350}
            height={30}
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-center sm:text-3xl lg:text-2xl'>Wednesday</div>
        <div className='flex justify-center'>
          <NextImage 
            src='/weekday-working-hours.svg'
            alt='Weekday hours of operation'
            width={350}
            height={30}
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-center sm:text-3xl lg:text-2xl'>Thursday</div>
        <div className='flex justify-center'>
          <NextImage 
            src='/weekday-working-hours.svg'
            alt='Weekday hours of operation'
            width={350}
            height={30}
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-center sm:text-3xl lg:text-2xl'>Friday</div>
        <div className='flex justify-center'>
          <NextImage 
            src='/weekday-working-hours.svg'
            alt='Weekday hours of operation'
            width={350}
            height={30}
          />
        </div>
      </div>
      
      <div className='flex flex-col'>
        <div className='flex justify-center sm:text-3xl lg:text-2xl'>Saturday</div>
        <div className='flex justify-center'>
          <NextImage 
            src='/weekend-working-hours.svg'
            alt='Saturday hours of operation'
            width={350}
            height={30}
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-center sm:text-3xl lg:text-2xl'>Sunday</div>
        <div className='flex justify-center'>
          <NextImage 
            src='/weekend-working-hours.svg'
            alt='Sunday hours of operation'
            width={350}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}

export default page