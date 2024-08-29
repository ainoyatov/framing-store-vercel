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
  const placeID = process.env.PLACE_ID
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  //Field = reviews
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=reviews&reviews_sort=newest&key=${apiKey}`)
  const data = await response.json()
  const reviews = data.result.reviews.map((review:any) => review)

  //Field = user_ratings_total
  const rsp = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=user_ratings_total&key=${apiKey}`)
  const dt = await rsp.json()
  const totalUserReviews = dt.result.user_ratings_total


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
        <div className='mb-16'>
          <RecentReviewTitle
            total_reviews={totalUserReviews}
          />
        </div>

        <div className='pb-4 py-6 overflow-x-scroll overscroll-none w-[300px] mxs:w-[400px] xs:w-[450px] sm:w-[620px] md:w-[725px] lg:w-[970px] xl:w-[1270px] 2xl:w-[1526px]'>   
          <div className='flex flex-row gap-4'>
            {reviews.map((review:any, index:number) => (
                review.text.length > 0 ? (
                  <div key={index} className="relative aspect-square h-[32vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3 ">
                    <GoogleReviews 
                      reviews={review.text}
                      authors={review.author_name}
                      reviewTime={review.time}
                      pictures={review.profile_photo_url}
                      index={index}
                    />
                  </div>
                ) : null
              ))
            }
          </div>
        </div>
      </section>

      <section className='flex mt-24 w-auto rounded-3xl'>
        <ThirdParagraph />
      </section>

    </main>
    </Suspense>
  );

}

