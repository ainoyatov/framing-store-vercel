import CalendlyBooking from '@/components/CalendlyBooking'
import React from 'react'
import { Metadata } from 'next'
import { Suspense } from 'react'
import LoadingDots from '@/components/shopify/utilities/loading-dots'

export const metadata: Metadata = {
  title: 'Appointment',
  description: 'Book a framing appointment in Scottsdale, get a fast quote, schedule custom framing, easy booking near Phoenix, expert framing consultation, in-store or at-home visits, art pickup and delivery',
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