import { NavLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import ShopifyNavbar from './shopify/layout/navbar'

export default function NavigationBar() {

    return (

        <div className='flex min-h-auto flex-row justify-between px-4 sm:px-12 sm:mt-8 w-[1900px]'>
            <a className='flex h-[75px] max-lg:hidden' href='/'>
               <Image src="/main-logo-light.svg" alt="main logo" width={250} height={1} className=''/> 
            </a>
            <div className='flex flex-row'>
                <div className='flex h-[75px] max-sm:hidden '>
                    <ul className="flex h-[75px] justify-center">
                        {NavLinks.map((links) => (
                            <li key={links.label} className="mt-4 p-2 text-xl  text-left">
                                <Link 
                                    href={links.href}
                                    className="2xl:text-2xl p-2"
                                >
                                    {links.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex h-[75px]'>
                    <ShopifyNavbar />
                </div>

            </div>
            
            <div className="lg:hidden z-10 fixed bottom-0 left-0 flex xl:px-16 h-auto w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black  ">
                <a href="/" className='py-4'>
                    <Image
                        src="/main-logo-light.svg"
                        alt="Art Custom Frames"
                        className=""
                        width={250}
                        height={250}
                        priority
                    />
                </a>
                           
            </div>

        </div>
    )
}
