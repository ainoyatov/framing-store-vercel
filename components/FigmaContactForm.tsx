'use client'

import { FC, useState, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { sendEmail } from '@/utils/send-email'
import { useForm } from 'react-hook-form'
import ContactInfo from './ContactInfo'
import { NavLinks } from '@/constants'
import Image from 'next/image'
import SocialMediaIcons from './SocialMediaIcons'

export type FormDataPoints = {
    name: string;
    email: string;
    phone: string;
    purpose: string;
    message: string;
}



const FigmaContactForm: FC = () => {

    const {register, handleSubmit, reset} = useForm<FormDataPoints>();

    const [captcha, setCaptcha] = useState<string | null>();

    const onSubmit = async (data: FormDataPoints) => {

        if(captcha) {
            
            const verifyCaptcha = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({captcha})
            })

            const {response} = await verifyCaptcha.json();
            
            if(response) {
                sendEmail(data);
                
                if(response) {
                    reset();
                }
                
            } else {
                alert('Please refresh the page and re-verify Captcha');
            }


        } else {
            alert('Please verify Captcha.')
        }
    }


    const data = [

        {
           
            paragraph: "(480) 268-7182",
            icon: "/phone_white.svg",
            href: "tel:+14802687182"
        },
        {
            
            paragraph: "info@customframing.store",
            icon: "/email_white.svg",
            href: "mailto:info@artandcustomframes.com"
        },
        {
            
            paragraph: "8241 E. Evans Rd. Ste#102 Scottsdale, AZ 85260",
            icon: "/map_pin_white.svg",
            href: "https://maps.app.goo.gl/zSCtCoUzRrvL4QA28?g_st=ic"
        },

        
    ]

    const socials = [
        {
            icon: "/instagram-yellow-icon.svg",
            href: "https://www.instagram.com/artandcustomframes"
        },
        {
            icon: "/facebook-yellow-icon.svg",
            href: "https://www.facebook.com/artandcustomframes"
        },
        {
            icon: "/google-yellow-icon.svg",
            href: "https://maps.app.goo.gl/zSCtCoUzRrvL4QA28?g_st=ic"
        }
    ]


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="flex flex-col px-2 md:px-4 lg:px-8">
            <div className="text-yellow-500 text-4xl font-bold self-center whitespace-nowrap mt-8 max-md:mt-10">
                Contact Us
            </div>
            <div className="text-neutral-500 text-center text-lg font-medium max-w-[459px] self-center mt-8 max-md:max-w-full">
                Any questions? Just write us a message!
            </div>
            
            <div className="shadow-2xl bg-white self-center w-[1196px] max-w-full mt-14 pl-2.5 pr-12 py-2.5 rounded-xl max-md:mt-10 max-md:pr-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex items-stretch w-[45%] max-md:w-full max-md:ml-0 mr-4">
                        
                        <div className='bg-[#011C2B] rounded-xl'>

                            <div className='ml-8 mt-8'>
                            <h2 className='text-3xl text-white' >Get in touch with us</h2>
                            </div>
                            
                            <div className='m-8 mt-4 mb-12'>
                            <p className='text-lg text-[#C9C9C9]'>Your inquiries and feedback are invaluable to us. We look forward to connecting with you.</p>
                            </div>

                            <div className='m-4'>
                            
                                {data.map((item, index) => (
                                    
                                    <ContactInfo
                                        key={index}
                                        paragraph={item.paragraph}
                                        icon={item.icon}
                                        href={item.href}
                                    />
                        
                                ))}
                            </div>
                            
                            <div className='flex items-end justify-between'>

                                <div className='flex ml-8 mb-4 md:mb-8'>
                                {socials.map((item,index) => (
                                    <SocialMediaIcons 
                                        icon={item.icon}
                                        href={item.href}
                                        key={index}
                                        
                                    />
                                ))}
                                </div>

                                <Image 
                                    src="/contact-us-ellipse.svg"
                                    alt='contact form ellipse large'
                                    width={200}
                                    height={10}
                                />
                            </div>
                       </div>
                     
                    </div>
                    
                    <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col mt-14 max-md:max-w-full max-md:mt-10">
                            <div className="self-stretch max-md:max-w-full">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                        <div className="flex flex-col max-md:mt-10">
                                            <label htmlFor='name'></label>
                                            <input
                                                placeholder="Name"
                                                type="text"
                                                className="border border-[#F0F0F0] w-full h-[50px] rounded-lg p-5 mb-5"
                                                {...register('name', {required: true})}
                                            />
                                            <label htmlFor='email'></label>
                                            <input
                                                placeholder="Email"
                                                type="text"
                                                className="border border-[#F0F0F0] w-full h-[50px] rounded-lg p-5 mb-5"
                                                {...register('email', {required: true})}
                                            />
                                        </div>
                                    </div>


                                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                                        <div className="flex grow flex-col max-md:mt-10">
                                                    <label htmlFor='purpose'></label>
                                                    <input
                                                        placeholder="Purpose"
                                                        type="text"
                                                        className="border border-[#F0F0F0] w-full h-[50px] rounded-lg p-5 mb-5"
                                                        {...register('purpose', {required:false})}
                                                    />
                                                    <label htmlFor='phone'></label>
                                                    <input
                                                        placeholder="Phone (Optional)"
                                                        type="text"
                                                        className="border border-[#F0F0F0] w-full h-[50px] rounded-lg p-5 mb-5"
                                                        {...register('phone', {required:false})}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-14 max-md:max-w-full max-md:mt-10">
                                        <label htmlFor='message'></label>
                                        <textarea
                                            rows={50}
                                            placeholder='Write your message..'
                                            className='border border-[#F0F0F0] w-full h-[100px] rounded-lg p-5 mb-5'
                                            {...register('message', {required: true})}
                                        >
                                        </textarea>
                                    </div>
                                       
                                    <div className='mt-4'>
                                       <ReCAPTCHA 
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} 
                                            className='w-full mt-4'
                                            onChange={setCaptcha}
                                        />
                                    </div>
                                    
                                   
                                    <div className='flex justify-end'>
                                        <button
                                            disabled={!captcha}
                                            className='className="text-white text-center text-base font-medium whitespace-nowrap items-stretch shadow-sm bg-slate-900 justify-center mt-11 px-12 py-4 rounded-md self-end max-md:mt-10 max-md:px-5'
                                        >
                                            <p className='text-white text-center'>Send Message</p>

                                        </button>
                                    </div>
                                   
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                    <div>
                </div>
            </div>
        </form>
    );
}

export default FigmaContactForm


