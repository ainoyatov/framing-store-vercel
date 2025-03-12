import React from 'react'
import { Metadata } from "next";
import TOS from '@/components/TOS';

export const metadata: Metadata = {
  title: 'TOS',
  description: "Read the Terms of Service for Art & Custom Frames. Our TOS page covers custom picture framing services, payment terms, turnaround times, and customer responsibilities.",
  robots: {
    follow: true,
    index: true
  },
  alternates: {
    canonical: 'https://artandcustomframes.com/terms-of-service'
  },
}

const TermsOfService = () => {
  return (
    <div>
      <TOS />
    </div>
  )
}

export default TermsOfService