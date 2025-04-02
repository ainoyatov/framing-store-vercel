import React from 'react'
import { Metadata } from "next";
import PrivacyPolicy from '@/components/policy/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Data NOT stored, Data NOT shared.',
  robots: {
    follow: true,
    index: true
  },
}

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  )
}

export default PrivacyPolicyPage