'use client';

import Image from "next/image";
import {useState} from "react";
import {Icon} from '@iconify/react';


const ImageCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
        {
            links: [
                {title:"Jerseys", url:"/sunday-hours.svg"},
                {title:"Posters", url:"/sunday-work-hours.svg"},
                {title:"Shadow Boxes", url:"/weekday-working-hours.svg"},
                {title:"Canvases", url:"/weekend-working-hours.svg"},
                {title:"Prints", url:"/QR-CODE.svg"},
                {title:"Custom Mirrors", url:"/weekday-working-hours.svg"},
            ]
        }
    ];

    const xyz = data.map((link) => link.links)
    const dataLength = xyz[0].length
    const categories = xyz[0].map((item) => item.title)
    const imgLinks = xyz[0].map((item) => item)
    
    

    const handleClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength );
    }

    return (
        <div>
            
            <div className="flex flex-row justify-between items-center">
                <div onClick={handleClick} className="flex p-4">
                    <Icon icon="lucide:chevron-left" width={28} height={28}/>
                </div>

                <div className="flex text-lg">
                    {categories[currentIndex]}
                </div>

                <div onClick={handleClick} className="flex p-4">
                    <Icon icon="lucide:chevron-right" width={28} height={28}/>
                </div>
            </div>

        </div>
    );
}

export default ImageCarousel