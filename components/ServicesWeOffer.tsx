'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react'
import { servicesOffered } from '@/constants';

// Define the structure of your service items
interface Service {
  title: string;
  description: string;
}


type UseIsMobile = boolean | undefined;

const useIsMobile = (mobileWidthThreshold: number = 475): UseIsMobile => {
  const [isMobile, setIsMobile] = useState<UseIsMobile>(undefined);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < mobileWidthThreshold);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileWidthThreshold]);

  return isMobile;
};


const ServiceItem: React.FC<{ service: Service }> = ({ service }) => {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpand = () => setExpanded(!expanded);
    
    return (

        <div onClick={toggleExpand} className=''>
            {!expanded 
                ? (
                    <div className='flex-1 gap-4 m-1'>
                        <div className='reviews__border p-1'>
                            <div className='flex justify-between items-start '>
                                <h3 className='text-md font-semibold text-slate-700 mb-2 dark:text-gray-300 line-clamp-1'>{service.title}</h3>
                                <div className={`${expanded && 'rotate-180'}`}>
                                    <Icon icon="lucide:chevron-down" width="24" height="24" />
                                </div>
                            </div>
                            <div>
                                <p className="text-slate-700 text-sm max-w-[250px] dark:text-gray-500 line-clamp-3">{service.description}</p> 
                            </div>
                        </div>
                    </div>
                )
                : (
                    
                    <div className='flex-1 gap-4 m-1'>
                        <div className='reviews__border p-1'>
                            <div className='flex justify-between'>
                                <h3 className='text-md font-semibold text-slate-700 mb-2 dark:text-gray-300'>{service.title}</h3>
                                <div className={`${expanded && 'rotate-180 flex items-end'}`}>
                                    <Icon icon="lucide:chevron-down" width="24" height="24" />
                                </div>
                            </div>
                            <div>
                                <p className="text-slate-700 text-sm max-w-[250px] dark:text-gray-500">{service.description}</p> 
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

const Services: React.FC = () => {

    const [toggleOpen, setToggleOpen] = useState(false)

    const openFullServiceList = () => setToggleOpen(!toggleOpen);
    
    const isMobile = useIsMobile();

    if (isMobile === undefined) return null;

    const halfDisplayedServices = isMobile ? servicesOffered.slice(0, 5) : servicesOffered;

    const fullDisplayedServices = servicesOffered.slice(5,10)

    return (
        <div className='flex-1'>
            
            <div className='flex justify-center mt-4'>
                {isMobile 
                    ? (
                        <div>
                            {toggleOpen 
                                ? (
                                    <div>
                                        <div>
                                            <div className='xs:hidden grid grid-cols-1 gap-2  xs:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5'>
                                                {servicesOffered.map((srv, idx) => (
                                                    <ServiceItem key={idx} service={srv} />
                                                ))}
                                            </div>
                                            <div onClick={openFullServiceList} className='flex justify-center rotate-180 mt-4'>
                                                <Icon icon="lucide:chevron-down" width="48" height="48" />
                                            </div>
                                        </div>
                                    </div>
                                )
                                : (
                                    <div>
                                        <div className='grid grid-cols-1 gap-2  xs:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5'>
                                            {halfDisplayedServices.map((service,index) => (
                                                <ServiceItem key={index} service={service} />
                                            ))}
                                        </div>
                                    
                                        <div onClick={openFullServiceList} className='flex justify-center mt-4'>
                                            <Icon icon="lucide:chevron-down" width="48" height="48" />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        
                    )
                    : (
                        <div>
                            {toggleOpen 
                                ? (
                                    <div onClick={openFullServiceList}>
                                        <Icon icon="lucide:chevron-down" width="48" height="48" />
                                    </div>
                                )
                                : (
                                    <div className='grid grid-cols-1 gap-2  xs:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:gap-6 2xl:grid-cols-5'>
                                    {servicesOffered.map((srv, idx) => (
                                        <ServiceItem key={idx} service={srv}/>
                                    ))}
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;