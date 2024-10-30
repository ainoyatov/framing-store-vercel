'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';


interface Review {
    author_name: string;
    author_url?: string;
    language?: string;
    original_language?: string;
    profile_photo_url?: string;
}

const GoogleReviews = () => {
    const [memory, setMemory] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const convertToDate = (t: any) => {
        const reviewDate = new Date(t * 1000).toLocaleDateString('en-us', {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
        return reviewDate;
    };

    const FiveReviews = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            });

            if (!response.ok) throw new Error("Failed to fetch reviews");

            const data = await response.json();
            console.log("Fetched data structure:", data);

            setMemory(data.GoogleReviews ?? []);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        FiveReviews();
    }, []);

    return (
        <div className="flex items-center justify-center">
            {isLoading ? (
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                    <p className="text-2xl font-semibold mt-4">Loading reviews...</p>
                </div>
            ) : (
                <div>
                    {memory.map((item) => (
                        <div key={item.author_name} className="mb-4">
                            <p>{item.author_name}</p>
                            {item.profile_photo_url && (
                                <Image src={item.profile_photo_url} alt={item.author_name} width={50} height={50} />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default GoogleReviews;







// 'use client';

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { Icon } from '@iconify/react'


// const GoogleReviews = () => {

//     const [memory, setMemory] = useState([])
    

//     // Function to retrieve five most recent Google reviews
//     const FiveReviews = async () => {

//         const response = await fetch('/api/reviews', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({})
//         });

//         const data = await response.json();
        
//         // setMemory(data)
//         setMemory(data);

//     }

//     useEffect(() => {
//         FiveReviews();
//     }, [])


//     console.log(memory)
    

//     return (
//         <div>
//             {/* {memory.map((item:any) => (
//                 <div key={item.author_name}>{item.author_name}</div>
//             ))} */}
//         </div>
//     );
// }

// export default GoogleReviews;


// 'use client';

// import Image from "next/image";
// import { useState } from "react";
// import { Icon } from '@iconify/react'


// const GoogleReviews = ({reviews, authors, reviewTime, pictures, index}:any) => {
    
//     const [isOpen, setIsOpen] = useState(false)

//     const toggle = () => {
//         setIsOpen((isOpen) => !isOpen)
//     }

//     const convertToDate = (t:any) => {
//         const reviewDate = new Date(t*1000).toLocaleDateString('en-us', {
//             year: "numeric",
//             month: "short",
//             day: "numeric"
//         })
//         return reviewDate;
//     }
    
//     return(
//         <div className="pb-6 pt-1 reviews__border" onClick={toggle}>
            
//             {isOpen 
//                 ? (
//                     <ul className="flex gap-4 border-slate-300">
//                         <div key={index} className="flex flex-col items-center ">
//                             <div className="flex w-full gap-2 items-center">  
//                                 <div className="p-1">
//                                     <Image 
//                                         src={pictures}
//                                         alt="avatars"
//                                         height={24}
//                                         width={24}
//                                     />
//                                 </div>
//                                 <div><h2 className={`text-lg font-semibold text-left dark:text-gray-300`}>{authors}</h2></div> 
//                             </div>
//                             <div className="flex flex-row w-full justify-start mt-2 p-1">
//                                 <Icon icon="noto:star" width="24" height="24"/>
//                                 <Icon icon="noto:star" width="24" height="24"/>
//                                 <Icon icon="noto:star" width="24" height="24"/>
//                                 <Icon icon="noto:star" width="24" height="24"/>
//                                 <Icon icon="noto:star" width="24" height="24"/>
//                             </div>
//                             <div className="flex text-left">
//                                 <p className="m-1 my-4 dark:text-gray-500">{reviews}</p>
//                             </div>
//                             <div className="flex w-full justify-start my-2">
//                                 <p className="p-1">{convertToDate(reviewTime)}</p>
//                             </div>
//                             <div className="flex w-full justify-end">
//                                 <div className={`p-1 ${isOpen && 'rotate-180'} `}>
//                                     <Icon icon="lucide:chevron-down" width="24" height="24"/>
//                                 </div>
//                             </div>
//                         </div>
//                     </ul>
//                 )
//                 : (
//                     <ul className="flex gap-4 ">
//                         <div key={index} className="flex flex-col items-center">
//                             <div className="flex w-full gap-2 items-center mb-3">
//                                 <div className="p-1">
//                                     <Image 
//                                         src={pictures}
//                                         alt="avatars"
//                                         height={24}
//                                         width={24}
//                                     />
//                                 </div>
//                                 <div><h2 className={`text-lg font-semibold text-left line-clamp-1 dark:text-gray-300`}>{authors}</h2></div>
//                             </div>
//                             <div className="flex flex-row w-full justify-start mb-2 p-1">
//                                 <Icon icon="noto:star" width="24" height="24"/>
//                                 <Icon icon="noto:star" width="24" height="24"/>
//                                 <Icon icon="noto:star" width="24" height="24"/>
//                                 <Icon icon="noto:star" width="24" height="24"/>
//                                 <Icon icon="noto:star" width="24" height="24"/>
//                             </div>
//                             <div className="flex text-left">
//                                 <p className="line-clamp-3 p-1 dark:text-gray-500">{reviews}</p>
//                             </div>
//                             <div className="flex w-full justify-start my-2">
//                                 <p className="p-1">{convertToDate(reviewTime)}</p>
//                             </div>     
//                             <div className="flex w-full justify-end">
//                                 <div className={`p-1 ${isOpen && 'rotate-180'} `}>
//                                     <Icon icon="lucide:chevron-down" width="24" height="24"/>
//                                 </div>
//                             </div>
//                         </div>
//                     </ul>   
//                 )
//             }
//         </div>
//     );
// }


// export default GoogleReviews