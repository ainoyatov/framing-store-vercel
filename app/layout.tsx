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

const baseUrl = "https://artandcustomframes.com"

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
  },
  alternates: {
    canonical: 'https://artandcustomframes.com'
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon-light.png',
        href: '/icon-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon-dark.png',
        href: '/icon-dark.png',
      }
    ]
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className='flex flex-row justify-center md:ml-0 '>
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

