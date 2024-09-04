'use client';

import Image from "next/image";
import {useState} from "react";
import {Icon} from '@iconify/react';


const ImageCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
        {
            links: [
                {title:"Jerseys", url:"https://www.michaelscustomframing.com/static/on/demandware.static/-/Sites-Artistree-Library/default/dwfd5e532a/images/home-page/custom_frames/Jerseys.png"},
                {title:"Posters", url:"https://www.michaelscustomframing.com/static/on/demandware.static/-/Sites-Artistree-Library/default/dw1bd95a40/images/home-page/custom_frames/PostersArt&Photography.png"},
                {title:"Shadow Boxes", url:"https://www.michaelscustomframing.com/static/on/demandware.static/-/Sites-Artistree-Library/default/dw4cf4fbe6/images/home-page/custom_frames/Documents.png"},
                {title:"Canvases", url:"https://www.michaelscustomframing.com/static/on/demandware.static/-/Sites-Artistree-Library/default/dwf7c96961/images/home-page/custom_frames/ExploreOurArtGallery.png"},
                {title:"Prints", url:"https://www.michaelscustomframing.com/static/on/demandware.static/-/Sites-Artistree-Library/default/dwdc3036f5/images/home-page/custom_frames/FramedUploads.png"},
                {title:"Custom Mirrors", url:"https://www.michaelscustomframing.com/static/on/demandware.static/-/Sites-Artistree-Library/default/dw845e581e/images/home-page/custom_frames/CustomMirrors.png"},
            ]
        }
    ];

    const xyz = data.map((link) => link.links)
    const dataLength = xyz[0].length
    const categories = xyz[0].map((item) => item.title)
    const imgLinks = xyz[0].map((item) => item.url)
    
    

    const handleClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength );
    }

    return (

        <div className="flex flex-row justify-center bg-black">
            {xyz[0].map((item, index) => (
                <div key={index} className="flex flex-col p-4 ">
                    <div className="flex justify-center text-white">{item.title}</div>
                    <Image 
                        src={imgLinks[index]}
                        alt="placeholder"
                        width={200}
                        height={1}
                        
                    />
                </div>
            ))}
        </div>

    );
}

export default ImageCarousel



        // <div>
            
        //     <div className="flex flex-row bg-white justify-between items-center">
        //         <div onClick={handleClick} className="flex p-4">
        //             <Icon icon="lucide:chevron-left" width={28} height={28}/>
        //         </div>

                
        //         <div className="flex flex-col p-4">
        //             <div className="flex justify-center text-3xl">{categories[currentIndex]}</div>
        //             <div>
        //                 <Image 
        //                     src={imgLinks[currentIndex]}
        //                     alt="placeholder"
        //                     width={300}
        //                     height={1}
        //                     className=""
        //                 />
        //             </div>
        //         </div>

        //         <div onClick={handleClick} className="flex p-4">
        //             <Icon icon="lucide:chevron-right" width={28} height={28}/>
        //         </div>
        //     </div>

        // </div>