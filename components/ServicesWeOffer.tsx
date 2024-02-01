import React from 'react';
import { servicesOffered } from '@/constants';

const Services = () => {
    const services = [
        {title:"Custom Picture Framing",         description:"Tailoring frames to fit any artwork or photograph, with a wide variety of styles and materials."},
        
        {title:"Art Installation Services",      description:"Providing professional installation services for framed artwork in homes, offices, or public spaces."},
        {title:"Mirror Framing",                 description:"Custom framing for mirrors, suitable for both decorative and practical uses in homes and businesses."},
        
        {title:"Jersey & Memorabilia Framing",   description:"Specializing in framing sports jerseys, collectibles, and other memorabilia with custom designs."},   
        {title:"Frame Restoration & Repair",     description:"Restoring damaged frames to their original condition, or making adjustments to fit new artwork."},
        {title:"Commercial & Corporate Framing", description:"Providing framing services tailored for business environments, including offices, hotels, and restaurants."},
        
        {title:"Conservation Framing",           description:"Using acid-free materials and UV-protective glass to preserve artwork and prevent deterioration."},
        {title:"Shadow Box Framing",             description:"Creating deep frames to display three-dimensional items like memorabilia, medals, or keepsakes."},
        {title:"Mat Cutting & Design",           description:"Offering custom mat cutting and design services to enhance the visual impact of framed pieces."},
        {title:"Canvas Stretching",              description:"Professionally stretching canvas artwork over frames for a clean, gallery-like appearance."},
        
    ];

    // Split the services array into rows
    const rows = [
        services.slice(0, 1), // First row: 1 item
        services.slice(1, 3), // Second row: 2 items
        services.slice(3, 6), // Third row: 3 items
        services.slice(6, 10) // Fourth row: 4 items
    ];

    return (
        <div className="flex flex-row w-full justify-center overflow-auto">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-col justify-center gap-4 m-1 xs:m-2 lg:gap-4 xl:gap-8 xl:m-4">
                    {row.map((item, index) => (
                        <div key={index} className="bg-blue-100 p-1  max-w-[300px] w-16 xs:w-20 sm:w-28 md:w-auto rounded-xl">
                            <h3 className="text-md font-semibold text-slate-700 mb-2 line-clamp-1">{item.title}</h3>
                            <p className="text-slate-700 text-sm line-clamp-2 xs:line-clamp-3">{item.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Services;