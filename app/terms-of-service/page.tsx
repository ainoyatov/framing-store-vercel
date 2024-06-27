import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'TOS',
  description: "Read the Terms of Service for Art & Custom Frames. Our TOS page covers custom picture framing services, payment terms, turnaround times, and customer responsibilities.",
  robots: {
    follow: true,
    index: true
  }
}

const TermsOfService = () => {
  return (
    <div>TermsOfService</div>
  )
}

export default TermsOfService