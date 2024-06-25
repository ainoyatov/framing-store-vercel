// 'use client'

// import { useEffect, useState } from "react"
// // import searchAllFrames from "@/lib/mouldings/searchAllFrames"
// import NextImage from "next/image"


// const DefaultFrameView = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [pageNumber, setPageNumber] = useState(1); // Initial page number
//     const [framesData, setFramesData] = useState([]);
//     const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

//     const handleSearch = async ( pageNumber:number) => {
        
//         try {
//             const response = await searchAllFrames(searchTerm, pageNumber);
//             setFramesData(response);
//         } catch(error) {
//             console.log(error)
//         }
        
//     };
    
//     const handleNextPage = () => {
//         const nextPageNumber = pageNumber + 1;
//         setPageNumber(nextPageNumber);
//         handleSearch(nextPageNumber);
//     };
    
//     const handlePrevPage = () => {
//         if (pageNumber > 1) {
//             const prevPageNumber = pageNumber - 1;
//             setPageNumber(prevPageNumber);
//             handleSearch(prevPageNumber);
//         }
//     };

//     const checkImage = (src: string, itemNum: string) => {
//         const img = new Image();
//         img.src = src;
//         img.onload = () => console.log(`${src} loaded successfully`);
//         img.onerror = () => {
//           setFailedImages(prev => new Set(prev.add(itemNum)));
//         }
//       }
    
//     useEffect(() => {
//         framesData.forEach((item:any) => {
//             const imageUrl = `https://s3.amazonaws.com/im-dropbox-sync/${item.itemnum}.jpg`;
//             checkImage(imageUrl, item.itemnum);
//         });
        
//     }, [framesData]);

//     useEffect(() => {
//         handleSearch(pageNumber);
//     }, [])
    
//     return (
//         <div>
//             <div>
//                 <div className="flex w-auto justify-center">
//                     <form onSubmit={(e) => { e.preventDefault(); handleSearch(pageNumber); }} className="flex flex-wrap">
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
//                     </form>
//                 </div>
                
                
//                 <div className="flex gap-6 justify-center p-8">
//                     <button onClick={handlePrevPage} className="p-4 rounded-full border-2 shadow-xl ">Prev</button>
//                     <button onClick={handleNextPage} className="p-4 rounded-full border-2 shadow-xl">Next</button>
//                 </div>

//             </div>

//             <div className="p-4 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5">

//                 {framesData.map((item:any) => (
//                     !failedImages.has(item.itemnum) ?
//                     (
//                         <div className="relative h-[300px] max-w-md" key={item.id}>
//                             <NextImage
//                                 alt="Frame image selections"
//                                 src={`https://s3.amazonaws.com/im-dropbox-sync/${item.itemnum}.jpg`}
//                                 fill
//                                 sizes="(min-width: 808px) 50vw, 100vw"
//                                 style={{
//                                 objectFit: 'cover', // cover, contain, none
//                                 }}
//                             />
//                         </div>
                        
//                     ) : (

//                         <div className="relative h-[300px] max-w-md" key={item.id}>
//                             <NextImage 
//                                 alt="product image not found"
//                                 src={`/image-not-found.svg`}
//                                 fill
//                                 sizes="(min-width: 808px) 50vw, 100vw"
//                                 style={{
//                                 objectFit: 'cover', // cover, contain, none
//                                 }}
//                             />
//                         </div>
//                     )
                    
//                 ))}

                
//             </div>

//             <div className="flex gap-6 justify-center p-8">
//                     <button onClick={handlePrevPage} className="p-4 rounded-full border-2 shadow-xl">Prev</button>
//                     <button onClick={handleNextPage} className="p-4 rounded-full border-2 shadow-xl">Next</button>
//             </div>

//         </div>
        
//     );
// };
    

// export default DefaultFrameView;