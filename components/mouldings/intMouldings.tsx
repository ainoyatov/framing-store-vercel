'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";

interface PageNumProps {
    pagenum: string;
}

const IntMouldings = () => {
    const [page, setPage] = useState(1);
    const [memory, setMemory] = useState([]);

    const defaultView = async (pagenum: number) => {
        const frames = await fetch('/api/default', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pagenum),
        });

        const data = await frames.json();
        setMemory(data);
    };

    useEffect(() => {
        defaultView(page);
    }, [page]);

    const handlePrev = () => {
        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    };

    const handleNext = () => {
        setPage((prevPage) => prevPage + 1);
    };

    

    return (
        <div className="p-2">
            <div className="flex flex-row justify-center gap-16">
                <CustomButton
                    handleClick={handlePrev}
                    containerStyles="button__color drop-shadow-2xl"
                    title="Prev"
                />
                <CustomButton
                    handleClick={handleNext}
                    containerStyles="button__color drop-shadow-2xl"
                    title="Next"
                />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center p-4 gap-8">
                {memory.map((item: any) => {
                    const imageUrl = item.imageName 
                        ? `https://s3.amazonaws.com/im-dropbox-sync/${item.imageName}` 
                        : item.itemCollection?.logoImage 
                        ? `https://s3.amazonaws.com/im-dropbox-sync/${item.itemCollection.logoImage}` 
                        : null; // No image available

                    return (
                        <div key={item.id} className="p-4 flex flex-col border-2 border-gray-400 rounded-3xl">
                            {/* Title/description */}
                            {imageUrl ? (
                                <a
                                    href={imageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center mb-4 bg-white rounded-3xl drop-shadow-lg font-bold p-2 max-w-[300px]"
                                >
                                    {item.description || 'No Description Available'}
                                </a>
                            ) : (
                                <div className="flex justify-center mb-4 bg-white rounded-3xl drop-shadow-lg font-bold py-2 max-w-[300px]">
                                    {item.description || 'No Description Available'}
                                </div>
                            )}

                            {/* Image */}
                            {imageUrl ? (
                                <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={imageUrl}
                                        alt={item.description || 'Moulding image'}
                                        width={300}
                                        height={300}
                                        className="rounded-3xl drop-shadow-lg"
                                    />
                                </a>
                            ) : (
                                <div>
                                    <Image
                                        src='/lj_background_image.jpeg'
                                        alt="Placeholder image"
                                        width={300}
                                        height={300}
                                        className="rounded-3xl drop-shadow-lg"
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-row justify-center gap-16">
                <CustomButton
                    handleClick={handlePrev}
                    containerStyles="button__color drop-shadow-2xl"
                    title="Prev"
                />
                <CustomButton
                    handleClick={handleNext}
                    containerStyles="button__color drop-shadow-2xl"
                    title="Next"
                />
            </div>

            <div className="ml-4 p-2 flex justify-center bg-white rounded-3xl w-auto">
                Current Page: {page}
            </div>
        </div>
    );
};

export default IntMouldings;
