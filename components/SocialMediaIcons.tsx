import React from 'react'
import Image from 'next/image'

const SocialMediaIcons = ({icon, href}: (any)) => {

    const handleClick = () => {
        if(icon === '/instagram-yellow-icon.svg'){
            window.open(href)
        }
        if (icon === '/facebook-yellow-icon.svg'){
            window.open(href)
        }
        if (icon === '/google-yellow-icon.svg'){
            window.open(href)
        } 
    }

    return (
        <div className='flex flex-row'>
            <div className='mr-4'>
                <Image 
                    src={icon}
                    alt='social media icons'
                    width={30}
                    height={30}
                    onClick={handleClick}
                    className='cursor-pointer'
                />
            </div>
        </div>
    )
}

export default SocialMediaIcons