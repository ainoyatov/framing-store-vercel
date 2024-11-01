'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from '@/components/embla/ui/EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from '@/components/embla/ui/EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import {Icon} from '@iconify/react';

interface Review {
    author_name: string;
    author_url?: string;
    language?: string;
    original_language?: string;
    profile_photo_url?: string;
    text?: string;
}

type ReviewProps = {
    author_name: string;
    author_url?: string;
    language?: string;
    original_language?: string;
    profile_photo_url?: string;
    rating: number;
    relative_time_description?: string;
    text?: string;
    time: number;
    translated?: boolean;
  };

const GoogleReviews = () => {
    const [memory, setMemory] = useState<ReviewProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const options: EmblaOptionsType = { loop: true };

    // Embla Carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    // Converts Unix timestamp to readable date
    const convertToDate = (t: number) => {
        return new Date(t * 1000).toLocaleDateString('en-us', {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    };

    // Fetches the most recent 5 reviews
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
        <section className="embla py-16 px-4">
            {isLoading ? (
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                    <p className="text-2xl font-semibold mt-4">Loading reviews...</p>
                </div>
            ) : (
                <div>
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {memory.map((item, idx) => (
                                <div className="embla__slide rounded-3xl p-2" key={idx}>
                                    <div className="flex-col space-y-2 py-8 rounded-[1.8rem]  font-semibold flex  h-[var(--slide-height)] select-none;">
                                        
                                        <div className="flex flex-row gap-2 items-center justify-center">
                                            <div className="">
                                                <Image 
                                                    src={item.profile_photo_url || '/google-icon.svg'} // Fallback image
                                                    alt={item.author_name}
                                                    width={24}
                                                    height={24}
                                                    className="rounded-full"
                                                />
                                            </div>

                                            <div className="text-lg">
                                                {item.author_name}
                                            </div>
                                        </div>

                                        <div className="flex flex-row w-full justify-center">
                                            <Icon icon="noto:star" width="24" height="24"/>
                                            <Icon icon="noto:star" width="24" height="24"/>
                                            <Icon icon="noto:star" width="24" height="24"/>
                                            <Icon icon="noto:star" width="24" height="24"/>
                                            <Icon icon="noto:star" width="24" height="24"/>
                                        </div>
                                        
                                        
                                        <div className="pt-4 text-[14px] line-clamp-3 px-1 md:px-4 text-center">
                                            {item.text}
                                        </div>

                                        <div className="pt-8 text-center">
                                            {convertToDate(item.time)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row justify-between my-4">
                        <div className="flex flex-row py-4">
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className="mr-2" />
                            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className="ml-2" />
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={selectedIndex === index 
                                        ? 'w-4 h-4 rounded-full border-2 border-cyan-900 opacity-50' 
                                        : 'w-4 h-4 rounded-full border-2 opacity-50 border-gray-400'}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default GoogleReviews;


// 'use client';

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { EmblaOptionsType } from 'embla-carousel'
// import { DotButton, useDotButton } from '@/components/embla/ui/EmblaCarouselDotButton'
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons
// } from '@/components/embla/ui/EmblaCarouselArrowButtons'
// import useEmblaCarousel from 'embla-carousel-react'


// interface Review {
//     author_name: string;
//     author_url?: string;
//     language?: string;
//     original_language?: string;
//     profile_photo_url?: string;
// }



// const GoogleReviews = () => {

//     const [memory, setMemory] = useState<Review[]>([]);
//     const [isLoading, setIsLoading] = useState(true);

//     const options = {loop: true}

//     // Carousel
//     const [emblaRef, emblaApi] = useEmblaCarousel(options)

//     const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

//     const {
//       prevBtnDisabled,
//       nextBtnDisabled,
//       onPrevButtonClick,
//       onNextButtonClick
//     } = usePrevNextButtons(emblaApi)

//     // Convert review time
//     const convertToDate = (t: any) => {
//         const reviewDate = new Date(t * 1000).toLocaleDateString('en-us', {
//             year: "numeric",
//             month: "short",
//             day: "numeric"
//         });
//         return reviewDate;
//     };

//     // Pull the most recent 5 reviews
//     const FiveReviews = async () => {
//         setIsLoading(true);
//         try {
//             const response = await fetch('/api/reviews', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({})
//             });

//             if (!response.ok) throw new Error("Failed to fetch reviews");

//             const data = await response.json();
//             console.log("Fetched data structure:", data);

//             setMemory(data.GoogleReviews ?? []);
//         } catch (error) {
//             console.error("Error fetching reviews:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         FiveReviews();
//     }, []);

//     return (

//         <section className="embla py-16 px-4">
//             {isLoading ? (
//                 <div className="flex flex-col items-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
//                     <p className="text-2xl font-semibold mt-4">Loading reviews...</p>
//                 </div>
//             ):(
//                 <div>
//                     <div className="embla__viewport" ref={emblaRef}>
//                         <div className="embla__container">
//                             {memory.map((item:any, idx:number) => (
//                                 <div className="embla__slide rounded-3xl p-2" key={idx}>
//                                     <div className="embla__slide__number flex-col space-y-4">
//                                         {/* Center of the slides */}  
//                                         <div className="flex flex-col">
//                                             <div className="flex flex-row gap-2">
//                                                 <div>
//                                                     <Image 
//                                                         src={item.profile_photo_url}
//                                                         alt='category images'
//                                                         width={36}
//                                                         height={36}
//                                                     />
//                                                 </div>
//                                                 <div className='flex text-xl lg:text-3xl'>
//                                                     {item.author_name}
//                                                 </div>
//                                             </div>

//                                             <div className="flex text-sm p-2">
//                                                 {item.text}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="flex flex-row justify-between my-4">
//                         <div className="flex flex-row py-4">
//                             <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className='mr-2' />
//                             <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className='ml-2'/>
//                         </div>
//                         <div className="flex flex-row gap-2 items-center">
//                             {scrollSnaps.map((_, index) => (
//                                 <DotButton
//                                     key={index}
//                                     onClick={() => onDotButtonClick(index)}
//                                     className={selectedIndex === index ? 'w-4 h-4 rounded-full border-2 border-cyan-900 opacity-50' : 'w-4 h-4 rounded-full  border-2 opacity-50 border-gray-400'}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}
            

                


//         </section>
//     );
// }

// export default GoogleReviews;




{/* <div className="flex items-center justify-center">
    {isLoading ? (
        <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            <p className="text-2xl font-semibold mt-4">Loading reviews...</p>
        </div>
    ) : (
        <div>
            {memory.map((item, idx) => (
                <div key={idx} className="mb-4">
                    <p>{item.author_name}</p>
                    {item.profile_photo_url && (
                        <Image src={item.profile_photo_url} alt={item.author_name} width={50} height={50} />
                    )}
                </div>
            ))}
        </div>
    )}
</div> */}





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