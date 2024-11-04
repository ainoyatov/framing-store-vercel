'use client';

import { useEffect, useState } from "react";
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from '@/components/embla/ui/EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from '@/components/embla/ui/EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import TextReviews from "./text-reviews";


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
            {isLoading ?

                (
                    <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                        <p className="text-2xl font-semibold mt-4">Loading reviews...</p>
                    </div>
                ) : 
                (
                    <div>
                        <div className="embla__viewport" ref={emblaRef}>
                            <div className="embla__container">
                                {memory.map((item) => (
                                    <TextReviews item={item} key={item.time} />
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
                )
            }

            
        </section>
    );
}

export default GoogleReviews;






// working version - 1

// 'use client';

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { EmblaOptionsType } from 'embla-carousel';
// import { DotButton, useDotButton } from '@/components/embla/ui/EmblaCarouselDotButton';
// import { PrevButton, NextButton, usePrevNextButtons } from '@/components/embla/ui/EmblaCarouselArrowButtons';
// import useEmblaCarousel from 'embla-carousel-react';
// import {Icon} from '@iconify/react';


// type ReviewProps = {
//     author_name: string;
//     author_url?: string;
//     language?: string;
//     original_language?: string;
//     profile_photo_url?: string;
//     rating: number;
//     relative_time_description?: string;
//     text?: string;
//     time: number;
//     translated?: boolean;
//   };

// const GoogleReviews = () => {
//     const [memory, setMemory] = useState<ReviewProps[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [expanded, setExpanded] = useState(false);

//     const options: EmblaOptionsType = { loop: true };

//     // Embla Carousel setup
//     const [emblaRef, emblaApi] = useEmblaCarousel(options);
//     const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
//     const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

//     // Converts Unix timestamp to readable date
//     const convertToDate = (t: number) => {
//         return new Date(t * 1000).toLocaleDateString('en-us', {
//             year: "numeric",
//             month: "short",
//             day: "numeric"
//         });
//     };

//     // Fetches the most recent 5 reviews
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

//     const toggleExpand = () => {    
        
//         setExpanded(!expanded)
//     };

//     const getHeightBasedOnText = (text: string) => {
    
//     if (text.length > 400) return 'h-auto';
//     else return 'h-72';
//     // if (text.length > 50) return 'h-[var(--slide-height-sm)]';
// };

//     return (
//         <section className="embla py-16 px-4">
//             {isLoading ? (
//                 <div className="flex flex-col items-center">
//                     <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
//                     <p className="text-2xl font-semibold mt-4">Loading reviews...</p>
//                 </div>
//             ) : (
//                 <div>
//                     {expanded ? (
//                         <div className="embla__viewport" ref={emblaRef}>
//                             <div className="embla__container">
//                                 {memory.map((item, idx) => (
//                                     <div className="embla__slide rounded-3xl p-2" key={idx}>
//                                         <div className={`flex-col space-y-2 py-8 rounded-[1.8rem] font-semibold flex select-none ${getHeightBasedOnText(item.text || '')}`}>
                                                                                    
//                                             <div className="flex flex-row gap-2 items-center justify-center">
//                                                 <div className="">
//                                                     <Image 
//                                                         src={item.profile_photo_url || '/google-icon.svg'} // Fallback image
//                                                         alt={item.author_name}
//                                                         width={24}
//                                                         height={24}
//                                                         className="rounded-full"
//                                                     />
//                                                 </div>

//                                                 <div className="text-lg">
//                                                     {item.author_name}
//                                                 </div>
//                                             </div>

//                                             <div className="flex flex-row w-full justify-center">
//                                                 <Icon icon="noto:star" width="24" height="24"/>
//                                                 <Icon icon="noto:star" width="24" height="24"/>
//                                                 <Icon icon="noto:star" width="24" height="24"/>
//                                                 <Icon icon="noto:star" width="24" height="24"/>
//                                                 <Icon icon="noto:star" width="24" height="24"/>
//                                             </div>
                                            
                                            
//                                             <div className={`pt-4  text-[14px] px-1 md:px-4 text-center`}>
//                                                 {item.text}
//                                             </div>

//                                             <div onClick={toggleExpand} className="flex w-full justify-center">
//                                                 <Icon icon="lucide:chevron-up" width="24" height="24" />
//                                             </div>

//                                             <div className="pt-8 text-center">
//                                                 {convertToDate(item.time)}
//                                             </div>

//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="embla__viewport" ref={emblaRef}>
//                             <div className="embla__container">
//                                 {memory.map((item, idx) => (
//                                     <div className="embla__slide rounded-3xl p-2" key={idx}>
//                                         <div className={`flex-col space-y-2 py-8 rounded-[1.8rem] font-semibold flex select-none ${getHeightBasedOnText(item.text || '')}`}>
                                            
//                                             <div className="flex flex-row gap-2 items-center justify-center">
//                                                 <div className="">
//                                                     <Image 
//                                                         src={item.profile_photo_url || '/google-icon.svg'} // Fallback image
//                                                         alt={item.author_name}
//                                                         width={24}
//                                                         height={24}
//                                                         className="rounded-full"
//                                                     />
//                                                 </div>

//                                                 <div className="text-lg">
//                                                     {item.author_name}
//                                                 </div>
//                                             </div>

//                                             <div className="flex flex-row w-full justify-center">
//                                                 <Icon icon="noto:star" width="24" height="24"/>
//                                                 <Icon icon="noto:star" width="24" height="24"/>
//                                                 <Icon icon="noto:star" width="24" height="24"/>
//                                                 <Icon icon="noto:star" width="24" height="24"/>
//                                                 <Icon icon="noto:star" width="24" height="24"/>
//                                             </div>
                                            
                                            
//                                             <div className="pt-4 text-[14px] line-clamp-3 px-1 md:px-4 text-center">
//                                                 {item.text}
//                                             </div>

//                                             <div onClick={toggleExpand} className="flex w-full justify-center">
//                                             {/* <div className={`${expanded && 'rotate-180 flex justify-center'}`}> */}
//                                                 <Icon icon="lucide:chevron-down" width="24" height="24" />
//                                             </div>
                                            
//                                             <div className="pt-8 text-center">
//                                                 {convertToDate(item.time)}
//                                             </div>

                                            

//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ) }

//                     <div className="flex flex-row justify-between my-4">
//                         <div className="flex flex-row py-4">
//                             <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className="mr-2" />
//                             <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className="ml-2" />
//                         </div>
//                         <div className="flex flex-row gap-2 items-center">
//                             {scrollSnaps.map((_, index) => (
//                                 <DotButton
//                                     key={index}
//                                     onClick={() => onDotButtonClick(index)}
//                                     className={selectedIndex === index 
//                                         ? 'w-4 h-4 rounded-full border-2 border-cyan-900 opacity-50' 
//                                         : 'w-4 h-4 rounded-full border-2 opacity-50 border-gray-400'}
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