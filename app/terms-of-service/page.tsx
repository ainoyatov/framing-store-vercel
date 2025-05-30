import React from 'react'
import { Metadata } from "next";
import TermsOfService from '@/components/policy/TermsOfService';

export const metadata: Metadata = {
  title: 'TOS',
  description: "Read the Terms of Service for Art & Custom Frames. Our TOS page covers custom picture framing services, payment terms, turnaround times, and customer responsibilities.",
  robots: {
    follow: true,
    index: true
  },
}

const TermsOfServicePage = () => {
  return (
    <div>
      <TermsOfService />
    </div>
  )
}

export default TermsOfServicePage