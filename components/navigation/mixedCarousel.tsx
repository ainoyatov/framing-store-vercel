'use client';

import { useState } from "react";

const Carousel = () => {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalItems = items.length;

    const moveLeft = () => {
        setCurrentIndex((currentIndex - 1 + totalItems)%totalItems);
    }
    const moveRight = () => {
        setCurrentIndex((currentIndex + 1)%totalItems);
    }

    return (
        <div className="w-full p-4 mx-8 mt-12 border border-gray-300 rounded overflow-hidden">
            <div className={`flex transform transition-transform duration-500`} style={{transform: `translateX(${-currentIndex*100}%)`}} >
                {items.map((item, index) => (
                    <div key={index} className="w-full text-center py-6 bg-gray-200">
                        {item}
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <button className="px-4 py-2 mx-2 bg-gray-300" onClick={moveLeft}></button>
                <button className="px-4 py-2 mx-2 bg-gray-300" onClick={moveRight}></button>
            </div>
        </div>
    );


}

export default Carousel;