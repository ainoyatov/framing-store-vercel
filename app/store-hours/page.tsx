import React from 'react'
import { Metadata } from "next";
import AnalogClock from '@/components/clock/AnalogClock';

export const metadata: Metadata = {
  title: 'Store Hours'
}

const page = () => {
  return (
    <div className='flex justify-center p-8'>
      <AnalogClock />
    </div>
  )
}

export default page