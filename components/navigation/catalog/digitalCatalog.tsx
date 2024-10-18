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

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4 p-4">
        {/* Image that takes up the full screen */}
        <div className='flex flex-row items-center space-x-4 '>
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
        </div>

        <div className='flex flex-row space-x-4'>
            <button className='p-1 rounded-full border-2 border-cyan-900' onClick={prevImage}>
                <Icon icon="lucide:chevron-left" width={24} height={24}/>
            </button>

            <button className='p-1 rounded-full border-2 border-cyan-900' onClick={nextImage}>
                <Icon icon="lucide:chevron-right" width={24} height={24}/>
            </button>

            </div>
        </div>
  );
}