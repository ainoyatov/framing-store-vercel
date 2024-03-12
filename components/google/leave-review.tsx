'use client'

import Image from "next/image"
import CustomButton from "@/components/CustomButton"
import { useRouter } from "next/navigation"

const LeaveAReview = () => {

    const router = useRouter();

    const handleScroll = () => {
        router.push('https://g.page/r/Cd4CHzG7U9CBEBM/review');
    }

    return (
        <div className='my-24 flex flex-col justify-center max-w-4xl'>
            <h1 className='hero__title'>Leave a review</h1>
            <p className='mb-6 hero__subtitle'>We hope you enjoyed your experience with us! If you could take a moment to leave a review, we'd greatly appreciate it.</p>
            
            <div className="flex justify-between">
                <div>
                    <CustomButton 
                        title="Leave Review"
                        containerStyles="button__color"
                        handleClick={handleScroll}
                    />
                </div>
                <div>
                    <Image 
                        src='/QR-CODE.svg'
                        alt='Google review qr code'
                        width={200}
                        height={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default LeaveAReview;