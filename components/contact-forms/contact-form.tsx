'use client';

import { useState } from "react";
import {sendEmail} from '../../utils/send-email'

export type FormDataPoints = {
    name: string;
    email: string;
    phone: string;
    purpose: string;
    message: string;
    status: string;
    state: boolean;
    msg: string;
}


export default function ContactFormDesktop() {

    const [state, setState] = useState('')
    

    const FormAction = async (formData:any) => {
        const res = await fetch('/api/form', {
            method: 'POST',
            body: formData,
          })

        const data = await res.json();
        
        //set the state
        setState(data);
        
        console.log(data)
        //send email
        sendEmail(data);
        
        
        if (data.status === 'ok') {
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }

    }



    return (

        <form action={FormAction} className="border-orange-400 border-4 p-2">

                <div className='mb-2 '>
                    
                    <input 
                        type="text"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        placeholder="Name"
                        required
                    />
                </div>

                <div className="grid gap-2 mb-2 md:grid-cols-3 ">
                    <div>
                        
                        <input
                            type="text"
                            name="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                            placeholder="Phone"
                            
                        />
                    </div>
                    <div>
                        
                        <input 
                            type="text"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                            placeholder="Email"
                            required 
                        />
                    </div>
                    <div>
                        
                        <input 
                            type="text"
                            name="purpose"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                            placeholder="Purpose"
                            required 
                        />
                    </div>
                </div>

                <div className="mb-2 ">
                    
                    <textarea 
                        name="message"
                        placeholder="Message" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        required  
                    >
                    </textarea>
                </div>

                <button type="submit" className="bg-green-300 p-2 rounded-xl">
                    Submit
                </button>
                
                
            </form>
    )
    
}