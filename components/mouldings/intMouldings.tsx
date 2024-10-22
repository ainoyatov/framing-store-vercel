'use client';

import { Data } from "@react-google-maps/api";
import { useEffect, useState } from "react";

interface fData {
    inputText: string,
    pageNum: number,
}

export default async function IntMoulding () {

    const [stated, setStated] = useState()

    const SearchAction = async (num:any) => {
        const res = await fetch('/api/default', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: num,
        })

        const dt = await res.json()
        setStated(dt);
    }

    
    useEffect(() => {
        const fetchData = async () => {
            const data = await SearchAction(1);
            console.log(data);
        }
    }, [])


    return (
        <div>
            Time
        </div>
    );
}