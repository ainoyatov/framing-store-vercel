'use client';

import { useState } from "react";
import Image from 'next/image';

interface Frame {
    title: string;
    url: string;
}

const FrameSelections: React.FC = () => {

    const frames: Frame[] = [
        { title: "Portrait", url: "/portrait.svg" },
        { title: "Landscape", url: "/landscape.svg" },
        { title: "Square", url: "/square.svg" },
        { title: "Panorama", url: "/panorama.svg" },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleClick = (index: number): void => {
        setCurrentIndex(index);
    };

    const img = frames.map((item) => item.url);

    return (
        <div className="flex justify-center items-center">
            <div className="relative w-[500px] h-[500px]">
                <Image 
                    src={img[currentIndex]}
                    alt="carousel images"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
                
                <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 h-10">
                    {frames.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleClick(idx)}
                            className={`flex justify-center items-center h-full w-full transition-transform duration-300
                            ${currentIndex === idx ? "scale-105 shadow-md bg-cyan-600 text-white" : "scale-100 bg-white text-black"} 
                            ${idx === 0 ? "rounded-bl-md" : ""} ${idx === frames.length - 1 ? "rounded-br-md" : ""}`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FrameSelections;