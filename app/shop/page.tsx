import TextCarousel from "@/components/navigation/textCarousel";
import Image from "next/image";

const ShopPage = () => {

  return (
    <div>
      <TextCarousel />
      {/* <div className="flex justify-end items-end px-8 bg-head-banner w-full h-[52vh] bg-cover p-4"> */}
      <div className="flex p-4 px-8 pt-32 pb-8 bg-head-banner bg-center bg-cover justify-center md:justify-start ">
        <div className="flex w-80 h-48 bg-white">
          Hello
        </div>
      </div>

      <div>
        Yes here
      </div>
    </div>
  )
}

export default ShopPage;