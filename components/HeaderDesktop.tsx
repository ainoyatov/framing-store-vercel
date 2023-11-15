'use client'

import React from 'react'
import { motion, useCycle } from 'framer-motion'
import { NavLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

const HeaderDesktop = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <motion.nav className="flex min-h-auto flex-row justify-between items-center px-4 md:mt-10">
            <motion.div className={`flex w-full py-2 justify-self-center md:flex ${isOpen ? '' : 'hidden'}`}>
                <ul className="h-auto  md:flex xs:pt-0 ">
                    {NavLinks.map((links) => (
                        <li key={links.label} className="menu__list">
                            <Link 
                                href={links.href}
                                className="text-2xl rounded-2xl border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-slate-200 "
                            >
                                {links.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        
            <motion.div className="z-10 fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none lg:px-4">
                <a href="/">
                    <Image
                        src="/acm-logo.svg"
                        alt="Art Custom Frames logo"
                        className="dark:invert"
                        width={250}
                        height={50}
                        priority
                    />
                </a>               
            </motion.div>
        </motion.nav>
  )
}

export default HeaderDesktop