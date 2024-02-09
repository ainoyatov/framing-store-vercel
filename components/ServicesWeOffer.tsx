'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react'

const Services = ({title, description, rowIndex}:any) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen((isOpen) => !isOpen)
    }


    return (
        <div className="flex">
            {isOpen 
                ? (
                    <div key={rowIndex} className="flex-1 w-40 gap-4 m-1">
                        <div className="reviews__border p-1">
                            <div>
                                <h3 className="text-md font-semibold text-slate-700 mb-2 ">{title}</h3>
                            </div>
                            <div>
                                <p className="text-slate-700 text-sm">{description}</p>
                            </div>
                            
                            <div className='flex w-full justify-end'>
                                <button
                                    onClick={toggle}
                                >
                                    <div className={`${isOpen && 'rotate-180'} `}>
                                        <Icon icon="lucide:chevron-down" width="24" height="24"/>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
                    
                )
                : (
                    <div key={rowIndex} className="flex-1 w-64 gap-4 m-1">
                        <div className="reviews__border p-1">
                            <div>
                                <h3 className="text-md font-semibold text-slate-700 mb-2 line-clamp-1">{title}</h3>
                            </div>
                            <div>
                                <p className="text-slate-700 text-sm line-clamp-2 xs:line-clamp-3">{description}</p>
                            </div>
                            
                            <div className='flex w-full justify-end'>
                                <button
                                    onClick={toggle}
                                >
                                    <div className={`${isOpen && 'rotate-180'} `}>
                                        <Icon icon="lucide:chevron-down" width="24" height="24"/>
                                    </div>
                                </button>
                            </div>
                     
                        </div>
                    </div>
                )
            }
        </div>
    )


};

export default Services;