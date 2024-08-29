'use client';


import NextImage from "next/image";
import { useState } from "react";
import {Icon} from '@iconify/react';

const RecentReviewTitle = ({total_reviews}:any) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleReviews = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    const convertToDate = (t:number) => {
        const reviewDate = new Date(t*1000).toLocaleDateString('en-us', {
            year: "numeric",
            month: "short",
            day: "numeric"
        })
        return reviewDate;
    }

    return (

        <div className="flex flex-col">
          
            <div className="flex w-full justify-center hero__title">
                Excellent
            </div>

            <div className="flex flex-row w-full justify-center pb-2">
                <Icon icon="noto:star" width="24" height="24"/>
                <Icon icon="noto:star" width="24" height="24"/>
                <Icon icon="noto:star" width="24" height="24"/>
                <Icon icon="noto:star" width="24" height="24"/>
                <Icon icon="noto:star" width="24" height="24"/>
            </div>
            
            <div className="flex w-full justify-center font-light text-[10px] pb-2">
                Based on <span className="font-bold px-1">{total_reviews} Reviews</span>
            </div>
            
            <div className="flex w-full justify-center pb-2">
                <NextImage 
                    src='/google-logo.svg'
                    alt="Main company logo"
                    width={90}
                    height={90}
                />
            </div>

        </div>

        
    );
}

export default RecentReviewTitle;