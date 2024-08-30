
import { Suspense } from "react"
import {ThreeItemGrid} from '@/components/shopify/grid/three-items'
import { Carousel } from "@/components/shopify/utilities/carousel";
import { Metadata } from "next";
import LoadingDots from "@/components/shopify/utilities/loading-dots";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'Shop',
    description: 'Art framing shop in Scottsdale, Framed posters on sale, Framed canvas, Stretch canvas, frame diplomas',
    robots: {
      follow: true,
      index: true
    }
  }



export default async function ShopifyPage() {

  return (
    <div className="flex flex-col">
      <div className="h-32 grid md:grid-cols-3 place-items-center bg-gray-800 text-white text-2xl">
        <div className="flex flex-col items-center">
          <div>Fall Sale</div>
          <div>70% OFF</div>
        </div>
        <div className="flex flex-col items-center">
          <div>Premium Quality</div>
          <div>Top Crafstmanship</div>
        </div>
        <div className="flex flex-col items-center">
          <div>Framed in house</div>
          <div>2-3 day completion</div>
        </div>
      </div>
      <div className="relative h-screen flex w-full bg-head-banner bg-contain bg-no-repeat"></div>
    </div>
  )
}


      // <div className="absolute bg-white p-4 rounded-xl drop-shadow-xl">
      //   <div className="flex flex-col">
      //     <h1 className='flex justify-center text-2xl'>70% of all</h1>
      //     <h1 className="flex justify-center text-2xl mb-3">in-store frames</h1>
      //     <h3 className="flex justify-center">Guaranteed to complete</h3>
      //     <h3 className="flex justify-center">in 3 days!</h3>
      //   </div>

      //   <div className="flex justify-center py-4">
      //     <CustomButton 
      //         title="Schedule Visit"
      //         containerStyles="bg-cyan-500 text-white rounded-full"
      //     />
      //   </div>
      // </div>




// return (
//   <div className="flex min-h-screen flex-col items-center">
//     <div className="relative flex bg-head-banner bg-cover h-[350px] w-full">
//       <div className="flex absolute inset-24 place-items-center">
//         <div className="flex flex-col w-full px-2 md:px-8 py-6 bg-white rounded-xl drop-shadow-xl ">
//           <div className="flex justify-center text-2xl font-bold">70% off all Custom</div>
//           <div className="flex justify-center text-2xl font-bold mb-3">Frame Collections</div>
//           <div className="flex justify-center">Only in-stock moldings</div>
//           <div className="flex justify-center">In-store only</div>
//           <div className="flex justify-center pt-6">
//             <CustomButton 
//               title="Get Started"
//               containerStyles="bg-cyan-700 dark:bg-white dark:text-black text-white rounded-full transition-colors hover:border-gray-300 hover:bg-cyan-900 hover:dark:border-neutral-700 hover:dark:bg-cyan-200"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )






        // <div className="relative flex flex-col md:flex-row p-2 justify-center bg-head-banner bg-cover h-[500px] w-full">
        //   <div className="w-48 h-48 bg-white p-2">
        //     Hello
        //   </div>
        //   <div className="w-48 h-48 bg-black text-white p-2">
        //     Bye
        //   </div>
        // </div>


// export default async function ShopifyPage() {
//   return (

//       <Suspense fallback={
//           <div className="flex justify-center text-2xl">
//             <LoadingDots className="bg-cyan-500"/>
//           </div>
//         }>
//       <div className="px-4 md:py-16">  
          
//           <ThreeItemGrid /> 
//           <Suspense>
//               <Carousel />
//           </Suspense>
//       </div>
//       </Suspense>
//   )
// }