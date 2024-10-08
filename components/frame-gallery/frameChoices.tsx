'use client';

import { useState } from "react";
import {Icon} from '@iconify/react'


const FrameSelections = () => {

    const frames = [
        {title: "One", url: "/image1.jpg"},
        {title: "Two", url: "/image2.jpg"},
        {title: "Three", url: "/image3.jpg"},
        {title: "Four", url: "/image4.jpg"},
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + frames.length) % frames.length);
    }

    const smth = frames.map((item) => item.title )

    return (
        <div className="flex flex-row justify-center">
            <div onClick={handleLeftClick} className='flex justify-center items-center p-4 '>
                <Icon icon="lucide:chevron-left" width="28" height="28" color='black' />
            </div>
            <div className='h-60 w-60 bg-black text-white flex justify-center items-center'>
                {smth[currentIndex]}
            </div>
            <div onClick={handleRightClick} className='flex justify-center items-center p-4'>
                <Icon icon="lucide:chevron-right" width="28" height="28" color='black'/>
            </div>
        </div>
    )
}

export default FrameSelections;



