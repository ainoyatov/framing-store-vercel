import React from 'react'
import { Metadata } from "next";
import Privacypolicy from '@/components/PrivacyPolicy';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Data NOT stored, Data NOT shared.',
  robots: {
    follow: true,
    index: true
  }
}

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
          <link
            rel="canonical"
            href="https://artandcustomframes.com/privacy-policy"
            key="canonical"
          />
      </Head>
      <div>
        <Privacypolicy />
      </div>
    </>
  )
}

export default PrivacyPolicy