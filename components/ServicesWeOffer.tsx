'use client';

import { useState } from 'react';

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
                        <div className="bg-blue-100 p-1">
                            <div>
                                <h3 className="text-md font-semibold text-slate-700 mb-2 ">{title}</h3>
                            </div>
                            <div>
                                <p className="text-slate-700 text-sm">{description}</p>
                            </div>
                            <div>
                                <button
                                    className={`rounded-lg text-white text-sm px-1 my-2 ${isOpen ? 'bg-fuchsia-400' : 'bg-cyan-500'}`}
                                    onClick={toggle}>{`${isOpen ? 'see less' : 'see more'}`}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                )
                : (
                    <div key={rowIndex} className="flex-1 w-64 gap-4 m-1">
                        <div className="bg-blue-100 p-1">
                            <div>
                                <h3 className="text-md font-semibold text-slate-700 mb-2 line-clamp-1">{title}</h3>
                            </div>
                            <div>
                                <p className="text-slate-700 text-sm line-clamp-2 xs:line-clamp-3">{description}</p>
                            </div>
                            <div>
                                <button
                                    className={`rounded-lg text-white text-sm px-1 my-2 ${isOpen ? 'bg-fuchsia-400' : 'bg-cyan-500'}`}
                                    onClick={toggle}>{`${isOpen ? 'see less' : 'see more'}`}
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