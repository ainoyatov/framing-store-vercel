'use client';

import { useState } from "react";

interface Frame {
    title: string;
    url: string;
}

const FrameSelections: React.FC = () => {

    const frames: Frame[] = [
        { title: "One", url: "/image1.jpg" },
        { title: "Two", url: "/image2.jpg" },
        { title: "Three", url: "/image3.jpg" },
        { title: "Four", url: "/image4.jpg" },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleClick = (index: number): void => {
        setCurrentIndex(index);
    };

    const smth = frames.map((item) => item.title);

    return (
        <div className="flex justify-center items-center">
            <div className="h-60 w-60 bg-black text-white flex flex-col justify-center items-center">
                <div className="mb-8 text-lg font-bold">{smth[currentIndex]}</div>
                <div className="grid grid-cols-4 w-full h-12">
                    {frames.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleClick(idx)}
                            className={`flex justify-center items-center h-full w-full transition-transform duration-300
                            ${currentIndex === idx ? "scale-105 shadow-md bg-cyan-600" : "scale-100"} 
                            ${idx === 0 ? "rounded-l-md" : ""} ${idx === frames.length - 1 ? "rounded-r-md" : ""}
                            bg-white text-black`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FrameSelections;


// import { useState } from "react";

// interface Frame {
//     title: string;
//     url: string;
// }

// const FrameSelections: React.FC = () => {

//     const frames: Frame[] = [
//         { title: "One", url: "/image1.jpg" },
//         { title: "Two", url: "/image2.jpg" },
//         { title: "Three", url: "/image3.jpg" },
//         { title: "Four", url: "/image4.jpg" },
//     ];

//     const [currentIndex, setCurrentIndex] = useState<number>(0);

//     const handleClick = (index: number): void => {
//         setCurrentIndex(index);
//     };

//     const smth = frames.map((item) => item.title);

//     return (
//         <div className="flex justify-center items-center h-screen">
//             <div className="h-60 w-60 bg-black text-white flex flex-col justify-center items-center">
//                 <div className="mb-8 text-lg font-bold">{smth[currentIndex]}</div>
//                 <div className="grid grid-cols-4 w-full h-12">
//                     {frames.map((item, idx) => (
//                         <button
//                             key={idx}
//                             onClick={() => handleClick(idx)}
//                             className={`flex justify-center items-center h-full w-full transition-colors duration-300
//                             ${currentIndex === idx ? "bg-blue-500 text-white" : "bg-white text-black"}
//                             ${idx === 0 ? "rounded-l-md" : ""} ${idx === frames.length - 1 ? "rounded-r-md" : ""}`}
//                         >
//                             {item.title}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FrameSelections;

// import { useState } from "react";

// interface Frame {
//     title: string;
//     url: string;
// }

// const FrameSelections: React.FC = () => {

//     const frames: Frame[] = [
//         { title: "One", url: "/image1.jpg" },
//         { title: "Two", url: "/image2.jpg" },
//         { title: "Three", url: "/image3.jpg" },
//         { title: "Four", url: "/image4.jpg" },
//     ];

//     const [currentIndex, setCurrentIndex] = useState<number>(0);

//     const handleClick = (index: number): void => {
//         setCurrentIndex(index);
//     };

//     const smth = frames.map((item) => item.title);

//     return (
//         <div className="flex justify-center">
//             <div className="h-60 w-60 bg-black text-white flex flex-col justify-center items-center">
//                 <div className="mb-8">{smth[currentIndex]}</div>
//                 <div className="flex flex-row gap-2 mt-8">
//                     {frames.map((item, idx) => (
//                         <div 
//                             key={idx} 
//                             className="h-12 w-12 bg-white text-black flex justify-center items-center cursor-pointer"
//                             onClick={() => handleClick(idx)}
//                         >
//                             {item.title}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FrameSelections;

