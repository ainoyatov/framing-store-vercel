import FirstParagraph from '@/components/FirstParagraph';
import SecondParagraph from '@/components/SecondParagraph';
import ThirdParagraph from '@/components/ThirdParagraph'
import GoogleReviews from '@/components/google/reviews'
import  Services from '@/components/ServicesWeOffer';
import { Suspense } from 'react';
import LoadingDots from '@/components/shopify/utilities/loading-dots';
import { Reviews } from '@/components/google/carousel-reviews';

export default async function Home(){
  const placeID = process.env.PLACE_ID
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=reviews&reviews_sort=newest&key=${apiKey}`)
  const data = await response.json()
  const reviews = data.result.reviews.map((review:any) => review)
  // const message = reviews.map((review:any) => review.text)

  // const recentReviews = [...reviews, ...reviews]

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

      <section className=''>
        <div className='hero__title flex w-auto justify-center my-16'>Services Offered</div>
          <div className='flex justify-center '>
            <Services />
          </div>
      </section>
      
      <section className='lg:my-16'>
        <SecondParagraph />
      </section>

      <section className='w-[400px] xs:w-auto 2xl:max-w-[1600px] overflow-x-auto'>
        <div className='hero__title flex w-full justify-center my-16'>Recent Reviews</div>
        <div className='flex flex-row gap-4'>
          {reviews.map((review:any, index:number) => (
            <div key={index} className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
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


      <section className=''>
        <ThirdParagraph />
      </section>

    </main>
    </Suspense>
  );

}



{/* <section>
  <div className='hero__title flex w-full justify-center my-16'>Recent Reviews</div>
  <div className='m-2 my-12 grid grid-cols-1 text-center gap-4 max-w-[1600px] xs:grid-cols-2  md:grid-cols-3 md:gap-26 xl:m-8 lg:grid-cols-4 lg:text-left 2xl:gap-32 2xl:grid-cols-5'>
      {recentReviews.map((review:any, index:number) => (
          <div key={index} className='flex w-64'>
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
</section> */}