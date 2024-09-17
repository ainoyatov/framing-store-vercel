// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';

// const Carousel = () => {
//   const images = [
//     'https://via.placeholder.com/200', // Placeholder images
//     'https://via.placeholder.com/201',
//     'https://via.placeholder.com/202'
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [frameStyle, setFrameStyle] = useState('border-red-500');

//   // Function to navigate to the next image
//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Function to navigate to the previous image
//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Function to change frame style
//   const changeFrameStyle = (style:any) => {
//     setFrameStyle(style);
//   };


//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative flex justify-center items-center">
//         {/* Image with frame */}
//         <div
//           className={`w-64 h-64 flex border-2 items-center justify-center p-4 rounded-lg ${frameStyle}`}
//         >
//           <Image
//             src={images[currentIndex]}
//             alt="Carousel"
//             className="max-w-full max-h-full"
//             width={250}
//             height={250}
//           />
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-4 flex gap-2">
//         <button
//           onClick={prevImage}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextImage}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           Next
//         </button>
//       </div>

//       {/* Frame Style Buttons */}
//       <div className="mt-4 flex gap-2">
//         <button
//           onClick={() => changeFrameStyle('border-red-500')}
//           className="px-4 py-2 bg-red-500 text-white rounded-lg"
//         >
//           Red Frame
//         </button>
//         <button
//           onClick={() => changeFrameStyle('border-green-500')}
//           className="px-4 py-2 bg-green-500 text-white rounded-lg"
//         >
//           Green Frame
//         </button>
//         <button
//           onClick={() => changeFrameStyle('border-blue-500')}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//         >
//           Blue Frame
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;




import SearchMouldingForm from "@/components/mouldings/valleyMoulding"
import { Metadata } from "next";
import LoadingDots from "@/components/shopify/utilities/loading-dots";

export const metadata: Metadata = {
  title: 'Frames',
  description: 'Find custom frames in Scottsdale, Find wood frames on sale near Scottsdale, Search thousands of unique frames, Find your perfect wedding picture frames at our store in Scottsdale',
  robots: {
    follow: true,
    index: true
  }
}

export default async function FramesPage() {

  return (
    <div>
      <SearchMouldingForm />
    </div>

  )
}

