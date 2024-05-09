'use client'

import { FC, useState, useEffect } from "react"
import {useForm} from 'react-hook-form'
import DisplayMouldings from "@/components/mouldings/defaultMouldings"


export type FormDataSearchProps = {
    inputText: string;
}

export type NoSearchProps = {
    inputText: null | string | undefined;
}

const SearchMouldingForm: FC = () => {

    const {register, handleSubmit, reset} = useForm<FormDataSearchProps>();
    const [searchedData, setSearchedData] = useState([]);
    const [defaultView, setDefaultView] = useState(true)
    const [notSearchedData, setNotSearchedDAta] = useState([]);

    const onSubmited = async (msg: FormDataSearchProps) => {
        if(msg) {
            const frames = await fetch('/api/suppliers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({msg})
            })

            const frameList = await frames.json();
            setSearchedData(frameList);
            setDefaultView(false)
            reset();

        }
        
    }

    useEffect(() => {

        const defaultFrames = async () => {
            const framing = await fetch('/api/default', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            })

            const defaultFraming = await framing.json();
            setNotSearchedDAta(defaultFraming);
        }

        defaultFrames()

    }, [])


    return (
        <div>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit(onSubmited)}>
                    <label htmlFor="inputText" ></label>
                    <input 
                        placeholder="Search..."
                        type="text"
                        {...register('inputText', {required: true})}
                        className="w-full h-[50px] rounded-full p-2 "
                    />
                </form>
            </div>
            

            {defaultView ? (
                <div className="py-16 p-4 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5">
                    {notSearchedData.map((item:any) => (
                        <div key={item.id}>
                            <DisplayMouldings 
                                itemNum={item.itemnum}
                            />
                        </div>
                    ))}
                </div>
                
            ) : (
                <div>
                    <div className="py-16 p-4 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5">
                        {searchedData.map((item:any) => (
                            <div key={item.id}>
                                <DisplayMouldings 
                                    itemNum={item.itemnum}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )

}

export default SearchMouldingForm
