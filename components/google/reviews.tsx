'use client';
import { useState } from "react";


const GoogleReviews = ({reviews, authors, reviewTime, index}:any) => {
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
        <div className="flex w-full justify-center">
            {isOpen 
                ? (
                    <div key={index} className="reviews__border flex flex-col items-center ">
                        <div className="flex w-full">
                            <h2 className={`mb-3 text-lg font-semibold text-left`}>{authors}</h2>
                        </div>
                        <div className="flex w-full text-left">
                            <p className="max-w-[35ch]">{reviews}</p>
                        </div>
                        <div className="flex w-full justify-end">
                            
                            <button 
                                className={`rounded-lg text-white text-sm px-1 my-2 ${isOpen ? 'bg-fuchsia-400' : 'bg-cyan-500'}`}
                                onClick={toggle}>{`${isOpen ? 'see less' : 'see more'}`}
                            </button>
                        </div>
                    </div>
                    )
                : (
                    <div key={index} className="reviews__border flex flex-col items-center max-w-[350px]">
                        <div className="flex w-full">
                            <h2 className={`mb-3 text-lg font-semibold text-left`}>{authors}</h2>
                        </div>
                        <div className="flex w-full text-left">
                            <p className="line-clamp-3 max-w-[35ch]">{reviews}</p>
                        </div>
                        <div className="flex w-full justify-start my-4">{convertToDate(reviewTime)}</div>
                        <div className="flex w-full justify-end">
                        <button 
                            className={`rounded-lg text-white px-1 text-sm  ${isOpen ? 'bg-fuchsia-400' : 'bg-cyan-500'}`}
                            onClick={toggle}>{`${isOpen ? 'see less' : 'see more'}`}
                        </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default GoogleReviews