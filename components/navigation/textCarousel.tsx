'use client';

import React, { useState } from 'react';
import {Icon} from '@iconify/react'

const TextCarousel = () => {
  // Mobile text loop
  const textsLong = [

    <div className='flex flex-col'>
      <div className='flex justify-center'>Fall Sale</div>
      <div className='flex justify-center'>70% OFF</div>
    </div>,
    
    <div className='flex flex-col'>
      <div className='flex justify-center'>
        Best Price
      </div>
      <div className='flex justify-center'>
        Top Crafstmanship
      </div>
    </div>,

    <div className='flex flex-col'>
      <div className='flex justify-center'>Framed in house</div>
      <div className='flex justify-center'>Delivered in 3 days</div>
    </div>
     
  ];

  // Desktop text loop
  const textsShort = [
    'Fall Sale. 70% OFF.', 
    'Best Price. Top Crafstmanship.', 
    'Framed in house. Delivered in 3 days.'
  ];

  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle right click (next text)
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textsLong.length);
  };

  // Function to handle left click (previous text)
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + textsLong.length) % textsLong.length);
  };

  return (
    <div className='bg-gray-700'>
      <div className='flex flex-row justify-between items-center lg:hidden'>
        <div onClick={handleLeftClick} className='flex p-4'>
          <Icon icon="lucide:chevron-left" width="28" height="28" color='white' />
        </div>

        <div className='flex text-lg text-white'>
          {textsLong[currentIndex]}
        </div>

        <div onClick={handleRightClick} className='flex p-4'>
          <Icon icon="lucide:chevron-right" width="28" height="28" color='white'/>
        </div>
        
      </div>

      <div className='max-lg:hidden grid grid-cols-3 h-20 items-center text-white'>
        {textsShort.map((line, index) => (
          <div key={index} className='flex justify-center'>{line}</div>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;