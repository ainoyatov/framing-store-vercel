'use client';

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
// import LoadingDots from "./shopify/utilities/loading-dots";

export default function GallerySearch() {
    
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (search) {
            setIsLoading(true);
            setTimeout(() => {
                router.push(`/results/${search}`);
            }, 3000)
        }
        setSearch('')
    }

    return (
        <div>
            {isLoading 
            
                ? (
                    <div className="flex justify-center text-2xl">
                        {/* <LoadingDots className="bg-cyan-500" /> */}
                    </div>
                )
            
                : (
                    <form className=" flex px-4 justify-center" onSubmit={handleSubmit}>
                        <input
                            type='text'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search'
                            className="w-2/3 bg-white p-2 text-xl rounded-xl border-2 shadow-xl text-black"
                        />
                    </form>
                )}
        </div>
    )
}
