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
  title: 'Home',
  description: "Picture frames in Scottsdale, custom frames near Scottsdale, canvas stretch in Scottsdale, shadow boxes in Scottsdale, wood frames, art frames, gallery frames, custom glasses, photo frames, art mounting, picture frame design, poster frames, frame shop near me, canvas framing, memorabilia framing, frame restoration, vintage picture frames, modern picture frames, affordable custom framing, professional framing services, bulk frame orders, picture framing consultation",
  robots: {
    follow: true,
    index: true
  }
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

      <section className='lg:my-16'>
        <RecentReviewTitle />
        <GoogleReviews />
      </section>

      <section className='mt-32'>
        <ThirdParagraph />
      </section>

    </main>
    </Suspense>
  );

}

