import React from 'react'
import { Metadata } from "next";
import Privacypolicy from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Data NOT stored, Data NOT shared.',
  robots: {
    follow: true,
    index: true
  },
  alternates: {
    canonical: 'https://artandcustomframes.com/privacy-policy'
  },
}

const PrivacyPolicy = () => {
  return (
    <div>
      <Privacypolicy />
    </div>
  )
}

export default PrivacyPolicy