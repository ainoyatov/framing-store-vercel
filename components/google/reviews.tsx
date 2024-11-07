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
        <section className="embla py-16">
            {isLoading ?

                (
                    <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                        <p className="text-2xl font-semibold mt-4">Loading reviews...</p>
                    </div>
                ) : 
                (
                    <div className="px-2 max-w-sm md:max-w-xl lg:max-w-none ">
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
                                            ? 'w-4 h-4 rounded-full border-2 border-cyan-900 opacity-50 dark:border-cyan-500' 
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