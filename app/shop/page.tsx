import ImageCarousel from "@/components/navigation/imageCarousel";
import TextCarousel from "@/components/navigation/textCarousel";
import Image from "next/image";

const ShopPage = () => {

  return (
    <div>
      
      <TextCarousel />
      
      <div className="flex p-4 px-8 pt-32 pb-8 bg-head-banner bg-center bg-cover justify-center md:justify-start lg:pl-24 ">
        <div className="flex flex-col items-center p-6 lg:p-10 min-w-80 min-h-48 lg:w-[350px] lg:h-[250px] rounded-xl drop-shadow-xl bg-white">
          <div className="text-3xl">70% off all</div>
          <div className="text-3xl mb-2">In-house Frames</div>
          <div className="mb-3">Guaranteed 2-3 day completion</div>
          <div className="bg-emerald-700 rounded-full p-2 text-white">Call Now</div>
        </div>
      </div>

      <div className="flex w-full bg-white text-3xl lg:text-4xl py-16 justify-center">
        What are you framing?
      </div>

      <div>
        <ImageCarousel />
      </div>
    </div>
  )
}

export default ShopPage;