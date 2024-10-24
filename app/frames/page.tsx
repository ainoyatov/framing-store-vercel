
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Frames',
  description: 'Wood frames in Scottsdale, Custom wood frames, Search thousands of unique frames, Canvas wood stretcher bar, stretcher bar, modern frames, classic frames, designer frames, custom designer frames in Scottsdale',
  robots: {
    follow: true,
    index: true
  }
}

const page = () => {
  return (
    <div>page page</div>
  )
}

export default page


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
