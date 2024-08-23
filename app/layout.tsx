import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import HeaderMobile from '@/components/HeaderMobile'
import { Suspense } from 'react'
import NavigationBar from '@/components/NavigationBar'
import { GoogleAnalytics } from '@next/third-parties/google'


export const revalidate = 3600

const inter = Inter({ subsets: ['latin'] })

const { SITE_NAME } = process.env;

const baseUrl = "artframing.studio"
  ? 'https://artframing.studio'
  : 'http://localhost:3000';


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  description: 'Picture frames in Scottsdale, custom frames near Scottsdale, canvas stretch in Scottsdale, shadow boxes in Scottsdale, wood frames, art frames, gallery frames, custom glasses, photo frames, art mounting, picture frame design, poster frames, frame shop near me, canvas framing, memorabilia framing, frame restoration, vintage picture frames, modern picture frames, affordable custom framing, professional framing services, bulk frame orders, picture framing consultation',
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

  //Google Analystics 4 gaId
  const gaId_id = process.env.NEXT_PUBLIC_GAID

  return (
    <html lang="en">
      <body className={inter.className}>

        <div className='lg:pt-12 flex flex-row justify-center md:ml-0'>
          <NavigationBar />
        </div>
        
        <div className=''>
          <HeaderMobile />
        </div>
          
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer/>
      </body>

      <GoogleAnalytics gaId='G-1K5QJXKPCD' />
    </html>
  )
}

