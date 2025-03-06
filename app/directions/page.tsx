import Directions from '@/components/google/directions'
import { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Directions',
  description: 'Picture framing store in Scottsdale, Custom framing near Scottsdale, Art framing in Scottsdale',
  robots: {
    follow: true,
    index: true
  }
}

export default function DirectionMap() {

  return (
    <>
      <Head>
        <title>Directions</title>
        <link
        rel="canonical"
        href="https://artandcustomframes.com/directions"
        key="canonical"
        />
      </Head>

      <div>
        <Directions />
      </div>       
    </>
  )
}


