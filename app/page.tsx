import BoxOptions from '@/components/BoxOptions';
import FirstParagraph from '@/components/FirstParagraph';
import SecondParagraph from '@/components/SecondParagraph';
import ThirdParagraph from '@/components/ThirdParagraph'
import { SmallBoxOptions } from '@/components/BoxOptions';
import GoogleReviews from '@/components/google/reviews'




export default async function Home(){
  const placeID = process.env.PLACE_ID
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=reviews&reviews_sort=newest&key=${apiKey}`)
  const data = await response.json()
  const reviews = data.result.reviews.map((review:any) => review)


  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-6  xs:px-16 xs:py-6'>
      
      <section className='lg:my-16'>
        <FirstParagraph />
      </section>

      <section className='m-2 my-12 grid grid-cols-1 text-center gap-4 max-w-[1600px] xs:m-4 xs:grid-cols-2 sm:grid-cols-3 lg:gap-8 xl:m-8 lg:grid-cols-5 lg:text-left 2xl:gap-12'>
        {reviews.map((review:any, index:number) => (
          <div key={index}>
            <GoogleReviews reviews={review.text} authors={review.author_name} reviewTime={review.time} index={index}/>
          </div>
        ))}
        
      </section>
      
      <section className='lg:my-16'>
        <SecondParagraph />
      </section>

      <section className='xs:my-12 lg:my-16'>
        <SmallBoxOptions />
      </section>

      <section className=''>
        <ThirdParagraph />
      </section>

      
    </main>
  );

}

