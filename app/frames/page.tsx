
import { Metadata } from "next";
import IntMouldings from "@/components/mouldings/intMouldings";
import IntDigitalCatalog from "@/components/mouldings/intDigitalCatalog";

export const metadata: Metadata = {
  title: 'Frames',
  description: 'Wood frames in Scottsdale, Custom wood frames, Search thousands of unique frames, Canvas wood stretcher bar, stretcher bar, modern frames, classic frames, designer frames, custom designer frames in Scottsdale',
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