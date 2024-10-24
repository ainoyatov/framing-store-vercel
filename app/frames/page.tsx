import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Frames',
  description: 'Wood frames in Scottsdale, Custom wood frames, Search thousands of unique frames, Canvas wood stretcher bar, stretcher bar, modern frames, classic frames, designer frames, custom designer frames in Scottsdale',
  robots: {
    follow: true,
    index: true
  }
}



const FramesNavigation = () => {
  return (
    <div className="flex justify-center mt-10">
      <Link href="/frames/digital-catalog" className="mx-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Digital Catalog
      </Link>
      <Link href="/frames/search-frames" className="mx-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Search Frames
      </Link>
      
    </div>
  );
};

export default FramesNavigation;


// import fs from 'fs';
// import path from 'path';
// import DigitalCarousel from '@/components/navigation/catalog/digitalCatalog';
// import IntMoulding from "@/components/mouldings/intMouldings";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Frames',
//   description: 'Wood frames in Scottsdale, Custom wood frames, Search thousands of unique frames, Canvas wood stretcher bar, stretcher bar, modern frames, classic frames, designer frames, custom designer frames in Scottsdale',
//   robots: {
//     follow: true,
//     index: true
//   }
// }

// interface ImageData {
//   filename: string;
//   filepath: string;
// }

// export default function Page() {
//   // Get the path to the image directory
//   const imagesDirectory = path.join(process.cwd(), 'public/larson-juhl');
  
//   // Read the image filenames from the directory
//   const filenames = fs.readdirSync(imagesDirectory);

//   // Map through the filenames to create the file paths
//   const images: ImageData[] = filenames.map((filename) => ({
//     filename,
//     filepath: `/larson-juhl/${filename}`,
//   }));

//   // Pass the images to the client-side Carousel component
//   return (
//     <div>
//       <DigitalCarousel images={images} />
//     </div>
//   );
// }
