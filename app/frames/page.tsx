
import { Metadata } from "next";
import IntMouldings from "@/components/mouldings/intMouldings";
import IntDigitalCatalog from "@/components/mouldings/intDigitalCatalog";

export const metadata: Metadata = {
  title: 'Frames',
  description: 'Custom frames in Scottsdale, designer frames, wood frames, canvas stretcher bars, modern frames, classic frames, gallery frames, premium custom framing, Scottsdale frame shop',
  robots: {
    follow: true,
    index: true
  },
}

const FramesPage = () => {

  return (
    <div>
      <div className="m-8 max-md:mt-10 flex justify-center text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#026974] to-[#00a8e8] bg-clip-text text-transparent">
          Search Frames
        </h1>
      </div>
      <IntMouldings />
      <div className="m-8 max-md:mt-10 flex justify-center text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#026974] to-[#00a8e8] bg-clip-text text-transparent">
          Digital Catalog
        </h1>
      </div>
      <IntDigitalCatalog />
    </div>
    
  );
}

export default FramesPage;