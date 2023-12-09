'use client';

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function GallerySearch() {
    
    const [search, setSearch] = useState('')
    const router = useRouter()
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (search) router.push(`/results/${search}`)
        setSearch('')
    }

    return (

        <form className=" flex px-4 justify-center" onSubmit={handleSubmit}>
            <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search'
                className="w-2/3 bg-white p-2 text-xl rounded-xl border-2 shadow-xl text-black"
            />
        </form>
    )
}
