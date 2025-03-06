import React from 'react'
import { Metadata } from "next";
import TOS from '@/components/TOS';
import Head from 'next/head';

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
    <>
      <Head>
        <title>Terms Of Service</title>
          <link
            rel="canonical"
            href="https://artandcustomframes.com/terms-of-service"
            key="canonical"
          />
      </Head>
      <div>
        <TOS />
      </div>
    </>
  )
}

export default TermsOfService