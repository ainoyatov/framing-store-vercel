
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
      <p className='text-3xl flex justify-center mt-16 mb-8'>Search Frames</p>
      <IntMouldings />
      <p className='text-3xl flex justify-center py-8'>Digital Catalog</p>
      <IntDigitalCatalog />
    </div>
    
  );
}

export default FramesPage;