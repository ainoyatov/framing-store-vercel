import CalendlyBooking from '@/components/CalendlyBooking'
import React from 'react'
import { Metadata } from 'next'
import { Suspense } from 'react'
import LoadingDots from '@/components/shopify/utilities/loading-dots'

export const metadata: Metadata = {
  title: 'Appointment',
  description: 'Simple step to get a price quote, Schedule a quick appointment, Easy framing near Scottsdale, Book your time with an expert',
  robots: {
    follow: true,
    index: true
  },
}


const Appointment = () => {
  return (
    <Suspense fallback={
      <div className="flex justify-center text-2xl">
        <LoadingDots className="bg-cyan-500"/>
      </div>
    }>
    <div>
      <CalendlyBooking />
    </div>
    </Suspense>
  )
}

export default Appointment