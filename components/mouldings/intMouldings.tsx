'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { Icon } from '@iconify/react';

interface PageNumProps {
    pagenum: string;
}

const IntMouldings = () => {
    const [page, setPage] = useState(1); // Pagination state
    const [memory, setMemory] = useState([]); // Fetched data state
    const [searchTerm, setSearchTerm] = useState(''); // Search term state
    const [loading, setLoading] = useState(false); // Loading state for handling search or fetch delay

    // Modified defaultView function to accept both pagenum and searchTerm
    const defaultView = async (pagenum: number, searchTerm: string) => {
        setLoading(true); // Set loading true before fetching data
        const response = await fetch('/api/default', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pagenum, searchTerm }), // Pass both pagenum and searchTerm to the backend
        });

        const data = await response.json();
        setMemory(data);
        setLoading(false); // Stop loading once data is fetched
    };

    useEffect(() => {
        // Call defaultView whenever the page or search term changes
        defaultView(page, searchTerm);
    }, [page, searchTerm]);

    const handlePrev = () => {
        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    };

    const handleNext = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value); // Update searchTerm state as user types
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page reload
        defaultView(page, searchTerm); // Trigger search on form submission
    };

    return (
        <div className="p-2">
            {/* Search Input */}
            <div className="flex justify-center py-4">
                <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 md:gap-4 relative">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Icon icon="wpf:search" width={20} height={20} color='black' />
                    </span>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search frames..."
                        className="text-center border rounded-full py-2 px-4 md:px-16 outline-none text-black"
                    />
                    {/* <button type="submit" className="px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600">
                        Search
                    </button> */}
                </form>
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-cols-3 items-center justify-center">
                <button className='p-1 rounded-full border-2 border-cyan-900' onClick={handlePrev}>
                    <Icon icon="lucide:chevron-left" width={36} height={36} />
                </button>

                {loading ? (
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
                    </div>
                ) : (
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
                                    <div
                                        className="transform transition duration-300 hover:scale-105 hover:shadow-2xl flex justify-center mb-4 bg-white text-black rounded-3xl drop-shadow-lg font-bold p-2 max-w-[300px]"
                                    >
                                        {item.description || 'No Description Available'}
                                    </div>

                                    {/* Image */}
                                    {imageUrl ? (
                                        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src={imageUrl}
                                                alt={item.description || 'Moulding image'}
                                                width={300}
                                                height={300}
                                                className="rounded-3xl drop-shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
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
                )}

                <button className='p-1 rounded-full border-2 border-cyan-900' onClick={handleNext}>
                    <Icon icon="lucide:chevron-right" width={36} height={36} />
                </button>
            </div>

            <div className="flex justify-center py-8">
                <div className='flex flex-row justify-between w-1/2'>
                    <button className='p-1 rounded-full border-2 border-cyan-900' onClick={handlePrev}>
                        <Icon icon="lucide:chevron-left" width={36} height={36} />
                    </button>

                    <button className='p-1 rounded-full border-2 border-cyan-900' onClick={handleNext}>
                        <Icon icon="lucide:chevron-right" width={36} height={36} />
                    </button>
                </div>
            </div>

            <div className="flex justify-center py-16">
                <div className="py-2 px-4 flex justify-center bg-white text-black rounded-3xl ">
                    Current Page: {page}
                </div>
            </div>
        </div>
    );
};

export default IntMouldings;


// 'use client';

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import CustomButton from "../CustomButton";
// import { Suspense } from 'react';
// import LoadingDots from '@/components/shopify/utilities/loading-dots';
// import { Icon } from '@iconify/react';

// interface PageNumProps {
//     pagenum: string;
// }

// const IntMouldings = () => {
//     const [page, setPage] = useState(1);
//     const [memory, setMemory] = useState([]);

//     const defaultView = async (pagenum: number) => {
//         const frames = await fetch('/api/default', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(pagenum),
//         });

//         const data = await frames.json();
//         setMemory(data);
//     };

//     useEffect(() => {
//         defaultView(page);
//     }, [page]);

//     const handlePrev = () => {
//         setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
//     };

//     const handleNext = () => {
//         setPage((prevPage) => prevPage + 1);
//     };

    

//     return (
        
//         <div className="p-2">

//             <div className="flex flex-cols-3 items-center justify-center">
                
//                 <button className='p-1 rounded-full border-2 border-cyan-900' onClick={handlePrev}>
//                     <Icon icon="lucide:chevron-left" width={36} height={36} />
//                 </button>
                
                
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center p-4 gap-8">
//                     {memory.map((item: any) => {
//                         const imageUrl = item.imageName 
//                             ? `https://s3.amazonaws.com/im-dropbox-sync/${item.imageName}` 
//                             : item.itemCollection?.logoImage 
//                             ? `https://s3.amazonaws.com/im-dropbox-sync/${item.itemCollection.logoImage}` 
//                             : null; // No image available

//                         return (
//                             <div key={item.id} className="p-4 flex flex-col border-2 border-gray-400 rounded-3xl">
//                                 {/* Title/description */}
//                                 {imageUrl ? (
//                                     <div
//                                         className="transform transition duration-300 hover:scale-105 hover:shadow-2xl flex justify-center mb-4 bg-white text-black rounded-3xl drop-shadow-lg font-bold p-2 max-w-[300px]"
//                                     >
//                                         {item.description || 'No Description Available'}
//                                     </div>
//                                 ) : (
//                                     <div className="flex justify-center mb-4 bg-white text-black rounded-3xl drop-shadow-lg font-bold py-2 max-w-[300px]">
//                                         {item.description || 'No Description Available'}
//                                     </div>
//                                 )}

//                                 {/* Image */}
//                                 {imageUrl ? (
//                                     <a href={imageUrl} target="_blank" rel="noopener noreferrer">
//                                         <Image
//                                             src={imageUrl}
//                                             alt={item.description || 'Moulding image'}
//                                             width={300}
//                                             height={300}
//                                             className="rounded-3xl drop-shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
//                                         />
//                                     </a>
//                                 ) : (
//                                     <div>
//                                         <Image
//                                             src='/lj_background_image.jpeg'
//                                             alt="Placeholder image"
//                                             width={300}
//                                             height={300}
//                                             className="rounded-3xl drop-shadow-lg"
//                                         />
//                                     </div>
//                                 )}
//                             </div>
//                         );
//                     })}
//                 </div>
               
//                 <button className='p-1 rounded-full border-2 border-cyan-900' onClick={handleNext}>
//                     <Icon icon="lucide:chevron-right" width={36} height={36} />
//                 </button>

//             </div>
            
//             <div className="flex justify-center py-8">
//                 <div className='flex flex-row justify-between w-1/2'>
//                     <button className='p-1 rounded-full border-2 border-cyan-900' onClick={handlePrev}>
//                         <Icon icon="lucide:chevron-left" width={36} height={36} />
//                     </button>

//                     <button className='p-1 rounded-full border-2 border-cyan-900' onClick={handleNext}>
//                         <Icon icon="lucide:chevron-right" width={36} height={36} />
//                     </button>
//                 </div>
//             </div>

//             <div className="flex justify-center">
//                 <div className="py-2 px-4 flex justify-center bg-white text-black rounded-3xl ">
//                     Current Page: {page}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default IntMouldings;
