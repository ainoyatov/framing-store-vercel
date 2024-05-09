
import NextImage from "next/image";

export default function DisplayMouldings ({itemNum}:any) {


    return (
        <div>
            <div className="relative h-[300px] max-w-md">
                <NextImage 
                    src={`https://s3.amazonaws.com/im-dropbox-sync/${itemNum}.jpg`}
                    alt="Images of frame moulding"
                    fill
                    sizes="(min-width: 808px) 50vw, 100vw"
                    style={{
                    objectFit: 'cover', // cover, contain, none
                    }}
                />
            </div>
        </div>
    )
}










// 'use client'


// import NextImage from "next/image";
// import searchFrames from "@/lib/mouldings/searchFrames"
// import { useEffect, useState } from "react";

// export default function DisplayFrames({search}:any) {

//     const [msg, setMsg] = useState([])


//     async function displaySearched () {
//         const res = await searchFrames(search);
//         const data = res.map((item:any) => item)
//         console.log(data)
//         setMsg(data)
//     }

//     useEffect(() => {
//         const data = displaySearched();
//     }, [])


//     return (
//         <div>
//             {msg.map((item:any) => (
//                 <div key={item.id}>
//                     {item.description}
//                     <NextImage 
//                         src={`https://s3.amazonaws.com/im-dropbox-sync/${item.itemnum}.jpg`}
//                         alt="Frame image selections"
//                         width={500}
//                         height={500}

//                     />
//                 </div>
//             ))}
            
//         </div>
//     )
// }



// 'use client'



// const Mouldings = async ({desc, src}:any) => {

//     return (
//         <div>
//             {desc}
//             <NextImage 
//                 src={src}
//                 width={500}
//                 height={500}
//                 alt="prodoct images"
//             />
//         </div>
//     )
// }

// export default Mouldings;




// 'use client'

// import NextImage from "next/image";
// import { useState } from "react";

// const Mouldings = async ({description, src}:any) => {

//     const [searchTerm, setSearchTerm] = useState('')

//     const handleSearch = async () => {
        
//     }

//     const handlePrevPage = async () => {

//     }

//     const handleNextPage = async () => {

//     }

//     return (
//         <div>
//             <div>
//                 <div className="flex w-auto justify-center">
//                     {/* <form onSubmit={(e) => { e.preventDefault(); handleSearch(pageNumber); }} className="flex flex-wrap"> */}
//                        <input 
//                             type="text"
//                             placeholder="Search"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="w-auto bg-white p-2 text-xl rounded-full border-2 shadow-xl text-black mx-2 md:mx-8"
//                         /> 
//                         <button
//                             type="submit"
//                             className="rounded-full font-semibold border-2 shadow-xl p-2"
//                         >
//                             Search
//                         </button>
//                     {/* </form> */}
//                 </div>
                
                
//                 <div className="flex gap-6 justify-center p-8">
//                     <button onClick={handlePrevPage} className="p-4 rounded-full border-2 shadow-xl ">Prev</button>
//                     <button onClick={handleNextPage} className="p-4 rounded-full border-2 shadow-xl">Next</button>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Mouldings;




