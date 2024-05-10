'use client';
import Image from "next/image";
import { useState } from "react";
import { Icon } from '@iconify/react'


const GoogleReviews = ({reviews, authors, reviewTime, pictures, index}:any) => {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    const convertToDate = (t:any) => {
        const reviewDate = new Date(t*1000).toLocaleDateString('en-us', {
            year: "numeric",
            month: "short",
            day: "numeric"
        })
        return reviewDate;
    }
    
    return(
        <div className="pb-6 pt-1 reviews__border" onClick={toggle}>
            
            {isOpen 
                ? (
                    <ul className="flex gap-4">
                        <div key={index} className="flex flex-col items-center ">
                            <div className="flex w-full gap-2 items-center">  
                                <div className="p-1">
                                    <Image 
                                        src={pictures}
                                        alt="avatars"
                                        height={24}
                                        width={24}
                                    />
                                </div>
                                <div><h2 className={`text-lg font-semibold text-left dark:text-gray-300`}>{authors}</h2></div> 
                            </div>
                            <div className="flex text-left">
                                <p className="m-1 my-4 dark:text-gray-500">{reviews}</p>
                            </div>
                            <div className="flex w-full justify-end">
                                <div className={`p-1 ${isOpen && 'rotate-180'} `}>
                                    <Icon icon="lucide:chevron-down" width="24" height="24"/>
                                </div>
                            </div>
                        </div>
                    </ul>
                )
                : (
                    <ul className="flex gap-4">
                        <div key={index} className="flex flex-col items-center">
                            <div className="flex w-full gap-2 items-center mb-3">
                                <div className="p-1">
                                    <Image 
                                        src={pictures}
                                        alt="avatars"
                                        height={24}
                                        width={24}
                                    />
                                </div>
                                <div><h2 className={`text-lg font-semibold text-left line-clamp-1 dark:text-gray-300`}>{authors}</h2></div>
                            </div>
                            <div className="flex text-left">
                                <p className="line-clamp-3 p-1 dark:text-gray-500">{reviews}</p>
                            </div>
                            <div className="flex w-full justify-start my-2">
                                <p className="p-1">{convertToDate(reviewTime)}</p>
                            </div>     
                            <div className="flex w-full justify-end">
                                <div className={`p-1 ${isOpen && 'rotate-180'} `}>
                                    <Icon icon="lucide:chevron-down" width="24" height="24"/>
                                </div>
                            </div>
                        </div>
                    </ul>   
                )
            }
        </div>
    );
}


export default GoogleReviews