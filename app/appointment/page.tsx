import CalendlyBooking from '@/components/CalendlyBooking'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Appointment'
}


const Appointment = () => {
  return (
    <div>
      <CalendlyBooking />
    </div>
  )
}

export default Appointment