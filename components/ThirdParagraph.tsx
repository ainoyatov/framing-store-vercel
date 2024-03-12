'use client'

import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const ThirdParagraph = () => {

    const router = useRouter();

    const handleScroll = () => {
        router.push('/contact-us')
    }

    return (
        <div className='grid text-left lg:grid-cols-2 max-lg:my-12'>
            
            <div className='flex flex-col justify-center max-w-4xl p-8'>
                <h1 className='hero__title'>Send us a message</h1>
                <p className='mb-6 hero__subtitle'>"Your inquiries and feedback are invaluable to us. We look forward to connecting with you."</p>
                
                <div>
                    <CustomButton 
                        title="Get in touch"
                        containerStyles="button__color"
                        handleClick={handleScroll}
                    />
                </div>
            </div>

            <div className="hero__image-container sm:mx-10">
                <Image 
                    src='/contact-us-animation.svg'
                    alt='contact us design'
                    width={750}
                    height={300}
                />
            </div>

            
        </div>
    );
}

export default ThirdParagraph;