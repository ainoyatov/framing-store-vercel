'use client';

import { useState } from "react";

interface ImgData {
    filename: string,
    filepath: string,
}

interface ImgProps {
    img: ImgData[]
}

export default function ManualCatalog ({img}: ImgProps) {

    const [currentIndex, setCurrentIndex] =  useState(0);
    
    const nextIndex = () => {
        setCurrentIndex((nextIndex) => (nextIndex + 1) % img.length)
    }

    const prevIndex = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + img.length) % img.length)
    }
    

    return (
        <div>
            Hello
        </div>
    );
}