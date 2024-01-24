import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import HeaderMobile from '@/components/HeaderMobile'
import HeaderDesktop from '@/components/HeaderDesktop'
import { Suspense } from 'react'
import { ensureStartsWith } from '@/lib/shopify/utils'
import ShopifyNavbar from '@/components/shopify/layout/navbar'
import NavigationBar from '@/components/NavigationBar'


export const revalidate = 3600

const inter = Inter({ subsets: ['latin'] })

const { SITE_NAME } = process.env;
// const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
//   : 'http://localhost:3000';
// const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
// const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;


const baseUrl = 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  description: 'Picture frames, custom frames, canvas stretch, shadow boxes, wood frames, art frames, gallery frames, custom glasses, photo frames, art mounting, picture frame design, poster frames, frame shop near me, canvas framing, memorabilia framing, frame restoration, vintage picture frames, modern picture frames, affordable custom framing, professional framing services, bulk frame orders, picture framing consultation',
  robots: {
    follow: true,
    index: true
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const placeID = process.env.PLACE_ID
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=current_opening_hours&reviews_sort=newest&key=${apiKey}`)
  const data = await response.json()
  const storeOpen = data.result.current_opening_hours.open_now
  const storeHours = data.result.current_opening_hours.weekday_text

  return (
    <html lang="en">
      <body className={inter.className}>

        <div className='lg:pt-12 flex flex-row justify-center md:ml-0 '>
          <NavigationBar />
        </div>
        
        <div className=''>
          <HeaderMobile />
        </div>
          
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer storeOpen={storeOpen} storeHours={storeHours}/>
      </body>
    </html>
  )
}

