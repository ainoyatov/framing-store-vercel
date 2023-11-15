'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const CollectionInfo = ({icon, title, paragraph}:(any)) => {

    const [phoneNumber, setPhoneNumber] = useState('')

    const handleClick = () => {
        if(icon === "store-location-icon.svg") {
            window.open('https://maps.app.goo.gl/zSCtCoUzRrvL4QA28?g_st=ic', '_blank')
        } else if (icon === "phone-icon.svg") {
            window.open('tel:+14802687182')
        } else {
            window.open('mailto:info@artandcustomframes.com')
        }
    }



    return (
        <div className='flex flex-row my-12 items-center'>
            
            <div className='bg-[#f7fdf4ba] cursor-pointer rounded-2xl w-14 h-14 mr-7 flex justify-center items-center shadow-xl hover:bg-fuchsia-400'>
                <Image 
                    width={24}
                    height={24}
                    src={icon}
                    alt=''
                    onClick={handleClick}
                />
            </div>

            <div className='w-full'>
                <h2 className='font-semibold text-[20px] leading-5 mb-2 items-center'>
                    {title}
                </h2>
                <p className='text-[#637381] text-[16px] leading-7 w-56 items-center'>
                    {paragraph}
                </p>
            </div>

        </div>
    )
}

export default CollectionInfo