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

export default async function Home(){
  const placeID = process.env.PLACE_ID
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=reviews&reviews_sort=newest&key=${apiKey}`)
  const data = await response.json()
  const reviews = data.result.reviews.map((review:any) => review)


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
        <div className='hero__title flex w-auto justify-center my-16'>Services Offered</div>
          <div className='flex justify-center '>
            <Services />
          </div>
      </section>
      
      <section className='lg:my-16'>
        <SecondParagraph />
      </section>

      <section className='w-[400px] xs:w-auto 2xl:max-w-[1600px] overflow-x-auto'>
        <div className='hero__title flex w-full justify-center mt-24 mb-32'>Recent Reviews</div>
        <div className='flex flex-row gap-4 h-[40vh] xs:h-[24vh]'>
          {reviews.map((review:any, index:number) => (
            <div key={index} className="relative aspect-square h-[20vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
              <GoogleReviews 
                reviews={review.text}
                authors={review.author_name}
                reviewTime={review.time}
                pictures={review.profile_photo_url}
                index={index}
              />
            </div>
          ))}
        </div>
        
      </section>
      
      <section className='flex justify-center mt-24 w-auto bg-gradient-to-r from-blue-50 to-cyan-50  rounded-3xl'>
        <div>
          <div>
            <ThirdParagraph />
          </div>
        </div>
      </section>


    </main>
    </Suspense>
  );

}

