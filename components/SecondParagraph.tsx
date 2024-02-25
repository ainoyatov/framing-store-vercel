'use client'

import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const SecondParagraph = () => {

    const router = useRouter();

    const handleScroll = () => {
        router.push('/gallery');
    }

    return (
        <div className='my-12 sm:my-12 grid text-left lg:grid-cols-2'>
            <div className='flex flex-col justify-center max-w-4xl'>
                <h1 className='hero__title'>Preserve and Display Your Memories</h1>
                <p className='mb-6 hero__subtitle'>"Frame a valuable art collection, treasured family photographs, or sentimental objects"</p>
                
                <div>
                    <CustomButton 
                        title="Visit Gallery"
                        containerStyles="button__color"
                        handleClick={handleScroll}
                        
                    />
                </div>
            </div>
            <div className='hero__image-container sm:mx-10'>
                <Image 
                    src='/room-design-1.svg'
                    alt='room design'
                    width={750}
                    height={300}
                />
            </div>
        </div>
    )
}

export default SecondParagraph;