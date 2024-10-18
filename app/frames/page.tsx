import fs from 'fs';
import path from 'path';
import DigitalCarousel from '@/components/navigation/catalog/digitalCatalog';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Frames',
  description: 'Wood frames in Scottsdale, Custom wood frames, Search thousands of unique frames, Canvas wood stretcher bar, stretcher bar, modern frames, classic frames, designer frames, custom designer frames in Scottsdale',
  robots: {
    follow: true,
    index: true
  }
}

interface ImageData {
  filename: string;
  filepath: string;
}

export default function Page() {
  // Get the path to the image directory
  const imagesDirectory = path.join(process.cwd(), 'public/larson-juhl');
  
  // Read the image filenames from the directory
  const filenames = fs.readdirSync(imagesDirectory);

  // Map through the filenames to create the file paths
  const images: ImageData[] = filenames.map((filename) => ({
    filename,
    filepath: `/larson-juhl/${filename}`,
  }));

  // Pass the images to the client-side Carousel component
  return <DigitalCarousel images={images} />;
}



// import SearchMouldingForm from "@/components/mouldings/valleyMoulding"
// import { Metadata } from "next";
// import LoadingDots from "@/components/shopify/utilities/loading-dots";
// import FrameSelections from "@/components/frame-gallery/frameChoices";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: 'Frames',
//   description: 'Find custom frames in Scottsdale, Find wood frames on sale near Scottsdale, Search thousands of unique frames, Find your perfect wedding picture frames at our store in Scottsdale',
//   robots: {
//     follow: true,
//     index: true
//   }
// }

// export default async function FramesPage() {

//   return (
//     <div className="flex justify-center py-16">
//       <Image 
//         src="/larson-juhl/academie_academie.png"
//         width={1000}
//         height={1}
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         // width={2500}
//         // height={2500}
//         alt="digital catalog"
//       />
//       {/* <iframe
//         src="https://shop.larsonjuhl.com/en-US/digitalcatalog"
//         width={1000}
//         height={1000}
//       >
        
//       </iframe> */}
//       {/* <FrameSelections /> */}
//       {/* <SearchMouldingForm /> */}
//     </div>

//   )
// }

