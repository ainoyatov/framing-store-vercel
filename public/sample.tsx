
//Latest version 2/5

// const rows = [
//     servicesOffered.slice(0,1),
//     servicesOffered.slice(1,3),
//     servicesOffered.slice(3,6),
//     servicesOffered.slice(6,10)
// ]

// const title = rows.map(row => (
//     row.map(r => r.title)
// ))

// return (
//     <div className='flex w-full justify-center'>
//         {isOpen 
//             ? (
//                 <div className="flex flex-row w-full justify-center overflow-auto">
//                     {rows.map((row, rowIndex) => (
//                         <div key={rowIndex} className="flex flex-col justify-center gap-4 m-1 xs:m-2 lg:gap-4 xl:gap-8 xl:m-4">
//                             {row.map((item, index) => (
//                                 <div key={index} className="bg-blue-100 p-1  max-w-[300px] w-16 xs:w-20 sm:w-28 md:w-auto rounded-xl">
//                                     <h3 className="text-md font-semibold text-slate-700 mb-2 line-clamp-1">{item.title}</h3>
//                                     <p className="text-slate-700 text-sm line-clamp-2 xs:line-clamp-3">{item.description}</p>
//                                     <button
//                                         className={`rounded-lg text-white text-sm px-1 my-2 ${isOpen ? 'bg-fuchsia-400' : 'bg-cyan-500'}`}
//                                         onClick={toggle}>{`${isOpen ? 'see more' : 'see less'}`}
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             )
//             : (
//                 <div className="flex flex-col  w-full justify-center overflow-auto">
//                     {rows.map((row, rowIndex) => (
//                         <div key={rowIndex} className="flex flex-col justify-center gap-4 m-1 xs:m-2 lg:gap-4 xl:gap-8 xl:m-4">
//                             {row.map((item, index) => (
//                                 <div key={index} className="bg-blue-100 p-1  xs:max-w-[300px]  md:w-auto rounded-xl">
//                                     <h3 className="text-md font-semibold text-slate-700 mb-2">{item.title}</h3>
//                                     <p className="text-slate-700 text-sm ">{item.description}</p>
//                                     <button
//                                         className={`rounded-lg text-white text-sm px-1 my-2 ${isOpen ? 'bg-fuchsia-400' : 'bg-cyan-500'}`}
//                                         onClick={toggle}>{`${isOpen ? 'see more' : 'see less'}`}
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             ) 
            
        
//         }

//     </div>
// );










// working version
// const Services = () => {

//     const services = [
//         {title:"Custom Picture Framing", description:"Tailoring frames to fit any artwork or photograph, with a wide variety of styles and materials."},
//         {title:"Canvas Stretching & Framing", description:"Professionally stretching canvas artwork over frames for a clean, gallery-like appearance."},
//         {title:"Shadow Box Framing", description:"Creating deep frames to display three-dimensional items like memorabilia, medals, or keepsakes."},
//         {title:"Conservation Framing", description:"Using acid-free materials and UV-protective glass to preserve artwork and prevent deterioration."},
//         {title:"Frame Restoration & Repair", description:"Restoring damaged frames to their original condition, or making adjustments to fit new artwork."},
//         {title:"Commercial & Corporate Framing", description:"Providing framing services tailored for business environments, including offices, hotels, and restaurants."},
//         {title:"Mirror Framing", description:"Custom framing for mirrors, suitable for both decorative and practical uses in homes and businesses."},
//         {title:"Jersey & Memorabilia Framing", description:"Specializing in framing sports jerseys, collectibles, and other memorabilia with custom designs."},
//         {title:"Mat Cutting & Design", description:"Offering custom mat cutting and design services to enhance the visual impact of framed pieces."},
//         {title:"Art Installation Services", description:"Providing professional installation services for framed artwork in homes, offices, or public spaces."}  
//     ];

//     return (
//         <div className="flex mx-auto p-4 justify-center">
//           <div className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 ">
//             {services.map((item, index) => (
//               <div key={index} className="bg-blue-100 p-2 rounded max-w-[300px]">
//                 <h3 className="text-md font-semibold text-slate-700 mb-2">{item.title}</h3>
//                 <p className='text-slate-700 text-sm'>{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       );

// }

// export default Services;

// const Services = () => {

//     // const services = servicesOffered.map((service) => service)

    

//     return (
//         <div>
//             {servicesOffered.map((product, index) => (
//                 <div key={index}>
//                     {Object.entries(product).map(([title, text], idx) => (
//                         <div className='flex flex-col' key={idx}>
//                             <div className='flex justify-center'>
//                                 <div className='w-40 h-40 bg-blue-100 m-2' >{title}</div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>

//     )

// }

// export default Services



// <div className="flex flex-col items-center space-y-4">
//     <div className="flex justify-center">
//         <div className="w-40 h-40 bg-blue-500">{title}</div>
//     </div>

//     <div className="flex justify-center space-x-4">
//         <div className="w-40 h-40 bg-blue-500">{title}</div>
//         <div className="w-40 h-40 bg-blue-500">{title}</div>
//     </div>

//     <div className="flex justify-center space-x-4">
//         <div className="w-40 h-40 bg-blue-500"></div>
//         <div className="w-40 h-40 bg-blue-500"></div>
//         <div className="w-40 h-40 bg-blue-500"></div>
//     </div>

//     <div className="flex justify-center space-x-4">
//         <div className="w-40 h-40 bg-blue-500"></div>
//         <div className="w-40 h-40 bg-blue-500"></div>
//         <div className="w-40 h-40 bg-blue-500"></div>
//         <div className="w-40 h-40 bg-blue-500"></div>
//     </div>
// </div>





// const Services = () => {

//     return (

//         <div className=' p-4 flex justify-center w-full'>
//             {servicesOffered.map((product, index) => (
//                 <div className='p-2 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 max-w-[20ch] xs:max-w-[40ch] lg:max-w-[60ch] gap-4 lg:gap-6 xl:max-w-[62ch]' key={index}>
//                     {Object.entries(product).map(([title, text], idx) => (
//                         <div key={idx} className='shadow-xl bg-white rounded-lg '>
//                             <div className='p-2 text-slate-900'>{title}</div>
//                             <div className='p-2 text-sm text-slate-600'>{text}</div>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     )

// }

// export default Services


  // Function to create a grid with the specified number of columns
//   const createGrid = (cols:any, rows:any) => (
//     <div className={`grid grid-cols-${cols} gap-4`}>
//       {servicesOffered.map((item, index) => (
//         <div key={index} className="bg-blue-500 p-4 overflow-auto">
//           <h3 className="text-lg font-bold">{item.title}</h3>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="space-y-4 p-4">
//       {createGrid(3, 4)}
//     </div>
//   );
