import FirstParagraph from '@/components/FirstParagraph';
import SecondParagraph from '@/components/SecondParagraph';
import ThirdParagraph from '@/components/ThirdParagraph'
import GoogleReviews from '@/components/google/reviews'
import  Services from '@/components/ServicesWeOffer';
import { Suspense } from 'react';
import LoadingDots from '@/components/shopify/utilities/loading-dots';
import CustomButton from '@/components/CustomButton';
import LeaveAReview from '@/components/google/leave-review';
import Image from 'next/image';
import { Metadata } from 'next';
import RecentReviewTitle from '@/components/google/recent-reviews';
import Icon from '@iconify/react'



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
      

      <section>
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

