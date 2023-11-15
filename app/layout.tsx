import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import HeaderMobile from '@/components/HeaderMobile'
import HeaderDesktop from '@/components/HeaderDesktop'


export const revalidate = 3600

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Art & Custom Frames',
  description: 'Picture frames, custom frames, canvas stretch, shadow boxes, wood frames, art frames, gallery frames, custom glasses',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= {inter.className}>
        <HeaderDesktop />
        <HeaderMobile />
        {children}
        <Footer />
      </body>
    </html>
  )
}

