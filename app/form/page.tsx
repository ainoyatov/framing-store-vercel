import { CarouselProducts } from "@/components/shopify/utilities/carousel"
import { ThreeItemGrid } from "@/components/shopify/grid/three-items"

const page = () => {
  return (
    <div>
      <h1 className="flex justify-center text-3xl py-16">Welcome</h1>
      <ThreeItemGrid />
      <CarouselProducts />
    </div>
  )
}

export default page