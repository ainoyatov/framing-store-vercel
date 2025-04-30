import FirstParagraph from '@/components/FirstParagraph';
import SecondParagraph from '@/components/SecondParagraph';
import ThirdParagraph from '@/components/ThirdParagraph'
import GoogleReviews from '@/components/google/reviews'
import  Services from '@/components/ServicesWeOffer';
import { Suspense } from 'react';
import LoadingDots from '@/components/shopify/utilities/loading-dots';
import { Metadata } from 'next';
import RecentReviewTitle from '@/components/google/recent-reviews';
import { CarouselProducts } from "@/components/shopify/utilities/carousel"

export const metadata: Metadata = {
  title: 'Picture Framing Shop',
  description:
    'Custom framing in Scottsdale, canvas framing, memorabilia framing, frame restoration, vintage picture frames, art framing, gallery frames, poster frames, custom glasses, photo frames, art mounting, picture frame design, modern picture frames, affordable custom framing, professional framing services, picture framing in Scottsdale, frame shop near me, custom frames in Scottsdale, custom frames in Phoenix, bulk frame orders, picture framing consultation, canvas stretch in Scottsdale, shadow boxes in Scottsdale, art framing in Scottsdale',
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    title: 'Art & Custom Frames | Picture Framing in Scottsdale',
    description: 'Custom framing, canvas stretching, and professional art display services in Scottsdale, AZ.',
    url: 'https://www.artandcustomframes.com',
    siteName: 'Art & Custom Frames',
    images: [
      {
        url: '/imageForOpenGraph.png',
        width: 1200,
        height: 630,
        alt: 'Framing Shop Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default async function Home(){

  return (

    <Suspense fallback={
      <div className="flex justify-center text-2xl">
        <LoadingDots className="bg-cyan-500"/>
      </div>
    }>
    <main className='flex min-h-screen flex-col items-center justify-between p-6 xs:px-16 xs:py-6'>
      
      <section className='lg:my-16'>
        <FirstParagraph />
      </section>

      <section className='lg:mb-24'>
        <div className='hero__title flex w-auto justify-center my-8'>Services Offered</div>
          <div className='flex justify-center '>
            <Services />
          </div>
      </section>
      
      <section className='lg:my-16'>
        <SecondParagraph />
      </section>
      
      <section className='w-full lg:my-16'>
        <div className='hero__title flex w-auto justify-center my-8'>Fine Art Prints & Originals</div>
        <CarouselProducts />
      </section>

      <section className='mt-16'>
        <RecentReviewTitle />
        <GoogleReviews />
      </section>

      <section className='mt-8'>
        <ThirdParagraph />
      </section>

    </main>
    </Suspense>
  );

}

