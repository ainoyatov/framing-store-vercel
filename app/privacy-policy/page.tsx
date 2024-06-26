import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Data NOT shared, No info stored, All city and state restrictions apply',
  robots: {
    follow: true,
    index: true
  }
}

const PrivacyPolicy = () => {
  return (
    <div>PrivacyPolicy</div>
  )
}

export default PrivacyPolicy