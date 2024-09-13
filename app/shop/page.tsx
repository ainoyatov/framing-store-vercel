import EmblaCarousel from "@/components/embla/ui/EmblaCarousel";
import TextCarousel from "@/components/navigation/textCarousel";
import { framingCategories } from "@/constants";


const ShopPage = () => {
  
  const OPTIONS = {loop: true}
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const categories = framingCategories.map((items:any) => items.links)
  const categoryText = categories[0]

  return (
    <div>
      <TextCarousel />
  
      <div className="flex w-full h-[1000px] p-4 px-8 pt-32 pb-8 bg-head-banner bg-center bg-cover justify-center items-center">
        <div className="flex flex-col items-center p-8 w-full xs:max-w-[400px] bg-white rounded-3xl drop-shadow-2xl">
          <div className="text-3xl">60% OFF</div>
          <div className="text-2xl">In-Stock Frames</div>
          <div className="m-2">Guaranteed 3-Day Turnaround !!</div>
          <a href="tel:+14802687182">
            <div className="bg-emerald-700 rounded-full p-2 text-white mt-2 drop-shadow-lg">Call Now</div>
          </a>
          
        </div>
      </div>
  
      <div className="flex w-full  text-3xl lg:text-[50px] pt-16 lg:pt-32 justify-center">
        What are you framing?
      </div>
  
      <div>
        <EmblaCarousel slides={categoryText} options={OPTIONS}/>
      </div>
  
    </div>
  )


}

export default ShopPage;