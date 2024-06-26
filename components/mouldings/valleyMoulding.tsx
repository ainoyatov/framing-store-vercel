'use client'

import { FC, useState, useEffect, Suspense, FormEvent } from "react"
import {useForm} from 'react-hook-form'
import DisplayMouldings from "@/components/mouldings/defaultMouldings"
import LoadingDots from "../shopify/utilities/loading-dots"
// import pageMoldings from "@/lib/mouldings/pagedView"


export type FormDataSearchProps = {
    inputText?: string;
    pageNum?: number;
    // nextPageButton: number;
    // prevPageButton: number;

}



const SearchMouldingForm: FC = () => {

    const {register, handleSubmit, reset} = useForm<FormDataSearchProps>();
    const [searchedData, setSearchedData] = useState([]);
    const [defaultView, setDefaultView] = useState(true)
    const [notSearchedData, setNotSearchedDAta] = useState([]);
    const [page, setPage] = useState(1)
    const [npage, setNpage] = useState(1)


    const onSubmited = async (msg: FormDataSearchProps) => {

        msg.pageNum = npage;
        const frames = await fetch('/api/suppliers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({msg})
        })

        const frameList = await frames.json();
        setSearchedData(frameList);
        setDefaultView(false);
        
    }

    
        
    const defaultFrames = async (page:number) => {

        const framing = await fetch('/api/default', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(page)
        })

        const defaultFraming = await framing.json();
        setNotSearchedDAta(defaultFraming);

    }
    
    useEffect(() => {
        defaultFrames(page);
    }, [])


    const handleNextPage = () => {
        setPage(page+1);
        console.log(page)
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
            console.log(page)
        }
    }

    const handleNext = () => {
        setNpage(npage+1);
        const pageNum = npage
        onSubmited({pageNum})
    }

    const handlePrev = () => {
        setNpage(npage-1);
        const pageNum = npage
        onSubmited({pageNum})
    }

    return (
        <div>
            
            <div>

                <div className="flex justify-center">
                    <form onSubmit={handleSubmit(onSubmited)}>
                        <label htmlFor="inputText" ></label>
                        <input 
                            placeholder="Search..."
                            type="text"
                            {...register('inputText', {required: true})}
                            className="w-full h-[50px] rounded-full p-6 dark:text-black"
                        />
                    </form>
                </div>

                {!defaultView && (
                        <div>
                            <div className="flex gap-6 justify-center p-8">
                                <button onClick={handlePrev} className="p-3 rounded-full border-2 shadow-xl">Prev</button>
                                <button onClick={handleNext} className="p-3 rounded-full border-2 shadow-xl">Next</button>
                             </div>

                            <div className="py-16 p-4 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5">
                                {searchedData.map((item:any) => (
                                    <div key={item.id}>
                                        <DisplayMouldings 
                                            itemNum={item.itemnum}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-6 justify-center p-8">
                                <label htmlFor="prevPageButton"></label>
                                <button onClick={handlePrevPage} className="p-3 rounded-full border-2 shadow-xl">Prev</button>
                                <label htmlFor="nextPageButton"></label>
                                <button onClick={handleNextPage} className="p-3 rounded-full border-2 shadow-xl">Next</button>
                            </div>
                        </div> 
                    )}
            </div>
            
            {defaultView && (
                <div>
                    <div className="flex gap-6 justify-center p-8">
                        <button type="button" onClick={handlePrevPage} className="p-3 rounded-full border-2 shadow-xl">PrevPage</button>
                        <label htmlFor="nextPageButton"></label>
                        <button type="button" onClick={handleNextPage} className="p-3 rounded-full border-2 shadow-xl">NextPage</button>
                    </div>

                    <div className="py-16 p-4 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5 3xl:gap-10 3xl:grid-cols-6">         
                        {notSearchedData.map((item:any) => (
                            <div key={item.id}>
                                <DisplayMouldings 
                                    itemNum={item.itemnum}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-6 justify-center p-8">
                        <button onClick={handlePrevPage} className="p-3 rounded-full border-2 shadow-xl">Prev</button>
                        <button onClick={handleNextPage} className="p-3 rounded-full border-2 shadow-xl">Next</button>
                    </div>
                </div>
                
            )}

        </div>
    )

}

export default SearchMouldingForm
