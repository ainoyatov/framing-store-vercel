"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

interface ImageData {
  filename: string;
  filepath: string;
}

interface CarouselProps {
  images: ImageData[];
}

export default function DigitalCarousel({ images }: CarouselProps) {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState(''); // State to track the search query

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  // Filter images based on the search query
  const filteredImages = images.filter((image) =>
    image.filename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-8 p-4">
        {/* Search Input */}
        <div className="relative w-1/2">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Icon icon="wpf:search" width={20} height={20} color='black' />
            </span>
            <input
                type="text"
                placeholder="Search image..."
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentIndex(0); // Reset carousel index when searching
                }}
                className="w-full pl-10 p-2 border border-gray-300 rounded-full text-center text-black"
            />
        </div>

      {/* Display message if no images match the search */}
      {filteredImages.length === 0 ? (
        <div className="text-red-500 text-lg md:text-2xl">No images match your search!</div>
      ) : (
        <>
          <div className='text-2xl md:mt-8'>
            Frames & more
          </div>
          <div className='drop-shadow-xl rounded-sm'>
            <Image
              src={filteredImages[currentIndex].filepath}
              alt={filteredImages[currentIndex].filename}
              width={1800}
              height={1}
              className="transition-opacity duration-500 ease-in-out"
            />
          </div>

          <div className='flex flex-row w-1/2 justify-between'>
            <button className='p-1 rounded-full border-2 border-cyan-900' onClick={prevImage}>
              <Icon icon="lucide:chevron-left" width={36} height={36} />
            </button>

            <button className='p-1 rounded-full border-2 border-cyan-900' onClick={nextImage}>
              <Icon icon="lucide:chevron-right" width={36} height={36} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}



// "use client";

// import { useState } from 'react';
// import Image from 'next/image';
// import { Icon } from '@iconify/react';

// interface ImageData {
//   filename: string;
//   filepath: string;
// }

// interface CarouselProps {
//   images: ImageData[];
// }

// export default function DigitalCarousel({ images }: CarouselProps) {
//   // State to track the current image index
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to go to the next image
//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Function to go to the previous image
//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };


//   return (
//     <div className="w-full flex flex-col items-center justify-center space-y-8 p-4">

//         <div className='text-2xl md:mt-8'>
//             Frames & more
//         </div>  
//         <div className='drop-shadow-xl rounded-sm'>
//             <Image
//                 src={images[currentIndex].filepath}
//                 alt={images[currentIndex].filename}
//                 width={1800}
//                 height={1}
//                 // layout="fill"
//                 // objectFit="contain"
//                 className="transition-opacity duration-500 ease-in-out"
//             />
//         </div>
        
        
//         <div className='flex flex-row w-1/2 justify-between '>
//             <button className='p-1 rounded-full border-2 border-cyan-900' onClick={prevImage}>
//                 <Icon icon="lucide:chevron-left" width={36} height={36}/>
//             </button>

//             <button className='p-1 rounded-full border-2 border-cyan-900' onClick={nextImage}>
//                 <Icon icon="lucide:chevron-right" width={36} height={36}/>
//             </button>

//             </div>
//         </div>
//   );
// }



    {/* <div className='flex flex-row items-center space-x-4 '>
            <button className='flex justify-center items-center rounded-full w-10 h-10 p-1 border-2 border-cyan-900' onClick={prevImage}>
                <Icon icon="lucide:chevron-left" width={24} height={24}/>
            </button>
            
            <div>
                <Image
                    src={images[currentIndex].filepath}
                    alt={images[currentIndex].filename}
                    width={1800}
                    height={1}
                    // layout="fill"
                    // objectFit="contain"
                    className="transition-opacity duration-500 ease-in-out"
                />
            </div>

            <button className='flex justify-center items-center rounded-full w-10 h-10 p-1 border-2 border-cyan-900' onClick={nextImage}>
                <Icon icon="lucide:chevron-right" width={24} height={24}/>
            </button>
        </div> */}
