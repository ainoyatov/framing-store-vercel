'use client'

import { useState, FormEvent } from "react";
import DisplayFrames from "./defaultMouldings";

// import NextImage from "next/image";
// import searchAllFrames from "@/lib/mouldings/searchAllFrames";



export default function SearchMouldings () {

    const [search, setSearch] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (search) {
            console.log(search)
            setSearch(search);
        }
        
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="msg"
                    value={search}
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}

                />
            </form>
            <br />

            {search}
            <DisplayFrames 
                search={search}
            />
            
        </div>

    )
}







// const SearchMouldings = ({search}:any) => {

//     const [searchTerm, setSearchTerm] = useState('')
//     const [framesData, setFramesData] = useState([]);
//     const [pageNumber, setPageNumber] = useState(1);

//     const handleSearch = async () => {
//         const search = searchTerm
//         console.log(search)

//     }

//     const handlePrevPage = async () => {
//     }

//     const handleNextPage = async () => {

//     }

//     return (
        
//         <div>
//             <div className="flex w-auto justify-center">
//                 <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex flex-wrap">
//                     <input 
//                         type="text"
//                         placeholder="Search"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="w-auto bg-white p-2 text-xl rounded-full border-2 shadow-xl text-black mx-2 md:mx-8"
//                     /> 
//                     <button
//                         type="submit"
//                         className="rounded-full font-semibold border-2 shadow-xl p-2"
//                     >
//                         Search
//                     </button>
//                 </form>
//             </div>
            
            
//             <div className="flex gap-6 justify-center p-8">
//                 <button onClick={handlePrevPage} className="p-4 rounded-full border-2 shadow-xl ">Prev</button>
//                 <button onClick={handleNextPage} className="p-4 rounded-full border-2 shadow-xl">Next</button>
//             </div>

//             <div>
//                 {framesData.map((item:any) => (
//                     <li key={item.id}>
//                         {item.itemnum}
//                     </li>
//                 ))}
//             </div>

//         </div>
        
//     )
// }

// export default SearchMouldings;





