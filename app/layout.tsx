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

// export const metadata: Metadata = {
//   title: 'Art & Custom Frames',
//   description: 'Picture frames, custom frames, canvas stretch, shadow boxes, wood frames, art frames, gallery frames, custom glasses',
// }


const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
        <Footer />
      </body>
    </html>
  )
}

