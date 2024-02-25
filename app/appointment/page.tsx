import CalendlyBooking from '@/components/CalendlyBooking'
import React from 'react'
import { Metadata } from 'next'
import { Suspense } from 'react'
import LoadingDots from '@/components/shopify/utilities/loading-dots'

export const metadata: Metadata = {
  title: 'Appointment'
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