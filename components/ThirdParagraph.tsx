'use client'

import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import ContactFormDesktop from "./contact-forms/contact-form";

const ThirdParagraph = () => {

    const router = useRouter();

    return (
        <div className='grid text-left lg:grid-cols-2 gap-16 justify-items-center w-full '>
            
            <div className='flex flex-col max-w-4xl '>
                <h1 className='hero__title '>Get in Touch</h1>
                <p className='mb-6 hero__subtitle'>"Your inquiries and feedback are invaluable to us. We look forward to connecting with you."</p>

            </div>

            <div className="flex justify-center items-center  max-w-lg drop-shadow-xl">
                <ContactFormDesktop />
            </div>
           
        </div>
    );
}

export default ThirdParagraph;