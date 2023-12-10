
import { Suspense } from "react"
import {ThreeItemGrid} from '@/components/shopify/grid/three-items'
import { Carousel } from "@/components/shopify/utilities/carousel";
import ShopifyNavbar from '@/components/shopify/layout/navbar'

export const runtime = 'edge';

export const metadata = {
    description: 'Custom framed pictures, art, jerseys, memorabilia, canvas, uniforms and more.',
    openGraph: {
        type: 'website'
    }
}

export default async function ShopifyPage() {
    return (
        <div className="px-4 2xl:px-32 md:py-16">  
            {/* <ShopifyNavbar /> */}
            <ThreeItemGrid /> 
            <Suspense>
                <Carousel />
            </Suspense>
        </div>
    )
}