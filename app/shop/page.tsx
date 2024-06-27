
import { Suspense } from "react"
import {ThreeItemGrid} from '@/components/shopify/grid/three-items'
import { Carousel } from "@/components/shopify/utilities/carousel";
import { Metadata } from "next";
import LoadingDots from "@/components/shopify/utilities/loading-dots";

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

        <Suspense fallback={
            <div className="flex justify-center text-2xl">
              <LoadingDots className="bg-cyan-500"/>
            </div>
          }>
        <div className="px-4 md:py-16">  
            
            <ThreeItemGrid /> 
            <Suspense>
                <Carousel />
            </Suspense>
        </div>
        </Suspense>
    )
}