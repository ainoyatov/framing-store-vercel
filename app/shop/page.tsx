
import { Suspense } from "react"
import {ThreeItemGrid} from '@/components/shopify/grid/three-items'
import { Carousel } from "@/components/shopify/utilities/carousel";

export const runtime = 'edge';

export const metadata = {
    description: 'Custom framed pictures, art, jerseys, memorabilia, canvas, uniforms and more.',
    openGraph: {
        type: 'website'
    }
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