'use client';

import { useState } from "react";
import Image from 'next/image';

interface Frame {
    title: string;
    url: string;
}

const FrameSelections: React.FC = () => {

    const frames: Frame[] = [
        { title: "Portrait", url: "/portrait.png" },
        { title: "Landscape", url: "/landscape.png" },
        { title: "Square", url: "/square.png" },
        { title: "Panorama", url: "/panorama.png" },
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
                
                {/* Button container with rounded corners */}
                <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 h-14 rounded-md overflow-hidden">
                    {frames.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleClick(idx)}
                            className={`relative flex justify-center items-center h-full 
                            ${currentIndex === idx ? "bg-zinc-600" : "bg-zinc-600 text-white"}`}
                        >
                            {currentIndex === idx ? (
                                <span className=" bg-white text-black text-sm py-2 px-1 rounded-md border-zinc-600">
                                    {item.title}
                                </span>
                            ) : (
                                <span className="text-white">{item.title}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FrameSelections;



{/* <button
    key={idx}
    onClick={() => handleClick(idx)}
    className={`flex justify-center items-center h-full w-full transition-transform duration-300
    ${currentIndex === idx ? " bg-white text-black" : "scale-100 bg-zinc-600 text-white"} 
    ${idx === 0 ? "rounded-bl-md" : ""} ${idx === frames.length - 1 ? "rounded-br-md" : ""}`}
>
    {item.title}
</button> */}