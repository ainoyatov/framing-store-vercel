'use client';

import React from 'react'

const intMouldings = () => {
  return (
    <div>Received your message</div>
  )
}

export default intMouldings



// 'use client';

// import { Data } from "@react-google-maps/api";
// import { useEffect, useState } from "react";

// interface fData {
//     inputText: string,
//     pageNum: number,
// }

// export default async function IntMoulding () {

//     return (
//         <div>
//             Time
//         </div>
//     );
// }





// const [stated, setStated] = useState()

//     const SearchAction = async (num:any) => {
//         const res = await fetch('/api/default', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(num),
//         })

//         const dt = await res.json()
//         setStated(dt);
//         console.log('hello')
//         console.log(dt.itemnum)
//     }

//     useEffect(() => {
//         SearchAction(1);
//     }, [])
    
//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await SearchAction(1);
//             console.log(data);
//         }
//     }, [])