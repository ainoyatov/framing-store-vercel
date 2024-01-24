
import { Suspense } from "react"
import {ThreeItemGrid} from '@/components/shopify/grid/three-items'
import { Carousel } from "@/components/shopify/utilities/carousel";
import { Metadata } from "next";

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'Shop'
  }

export default async function ShopifyPage() {
    return (
        <div className="px-4 md:py-16">  
            
            <ThreeItemGrid /> 
            <Suspense>
                <Carousel />
            </Suspense>
        </div>
    )
}