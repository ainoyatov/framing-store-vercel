import React from 'react'
import CollectionInfo from './CollectionInfo'

const ContactInfo = () => {

    const data = [
        {
            title: "Our Location",
            paragraph: "8241 E. Evans Rd. Ste#102 Scottsdale, AZ 85260",
            icon: "store-location-icon.svg"
        },
        {
            title: "Phone Number",
            paragraph: "(480) 268-7182 ",
            icon: "phone-icon.svg"
        },
        {
            title: "Email Address",
            paragraph: "info@customframing.store",
            icon: "email-icon.svg"
        },
    ]

    return (
        <div className='h-full p-4 lg:pt-10  lg:px-22 lg:py-32 xl:px-28 xl:py-32'>
            <h1 className='text-[#212B36] font-bold text-[40px] leading-10 mb-7'>
                Get In Touch With Us
            </h1>
            <p className='text-[#637381] text-[16px] leading-7'>
            We're delighted to hear from you! At our picture framing store, your satisfaction is our top priority. 
            Whether you have questions about our framing services, need assistance with your framing project, or 
            just want to chat about your creative ideas, don't hesitate to reach out. Our team is ready to assist you 
            with a friendly and professional touch. Your inquiries and feedback are invaluable to us, and we look forward 
            to connecting with you. Thank you for considering us for your framing needs
            </p>
            {data.map((item, index) => (
                <CollectionInfo 
                    key={index}
                    title={item.title}
                    paragraph={item.paragraph}
                    icon={item.icon}
                />
            ))}
        </div>
    )
}

export default ContactInfo