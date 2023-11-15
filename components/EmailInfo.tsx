'use client';

import React from 'react'
import { FC, useState, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { sendEmail } from '@/utils/send-email'
import { useForm } from 'react-hook-form'

export type FormsData = {
    name: string;
    email: string;
    phone: string;
    message: string;
}



const EmailInfo: FC = () => {

    const {register, handleSubmit, reset} = useForm<FormsData>();

    const [captcha, setCaptcha] = useState<string | null>();

    const onSubmit = async (data: FormsData) => {

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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='h-full p-4 lg:p-10  lg:px-22 lg:py-32 xl:px-28 xl:py-32'>
                <div className='bg-[#f7fdf4ba] p-8 items-center rounded-xl drop-shadow-lg h-full w-full xs:p-4 lg:p-10'>
                    <label htmlFor='name'></label>
                    <input 
                        type='text'
                        placeholder='Your Name'
                        className='border border-[#F0F0F0] w-full h-[50px] rounded-lg p-5 mb-5'
                        {...register('name', {required: true})}
                    />{" "}
                    <label htmlFor='email'></label>
                    <input 
                        type='text'
                        placeholder='Your Email'
                        className='border border-[#F0F0F0] w-full h-[50px] rounded-lg p-5 mb-5'
                        {...register('email', {required: true})}
                    />{" "}
                    <label htmlFor='phone'></label>
                    <input 
                        type='text'
                        placeholder='Your Phone (Optional)'
                        className='border border-[#F0F0F0] w-full h-[50px] rounded-lg p-5 mb-5'
                        {...register('phone', {required:false})}
                    />{" "}
                    <label htmlFor='message'></label>
                    <textarea
                        rows={10}
                        placeholder='Your Message'
                        className='border border-[#F0F0F0] w-full h-[50px] rounded-lg p-5 mb-5'
                        {...register('message', {required: true})}
                    >
                    </textarea>
                    <ReCAPTCHA 
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} 
                        className='w-full mb-5'
                        onChange={setCaptcha}
                    />
                    <button
                        disabled={!captcha} 
                        // className='bg-[#3056D3] w-auto h-[50px] rounded-lg p-5 mb-5 flex justify-center items-center'
                        className='button__color custom-btn'>
                        <p className='text-white leading-5'>Send Message</p>
                    </button>  
                </div>
            </div>
        </form>
    )
}

export default EmailInfo