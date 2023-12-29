'use client';

import React from 'react'
import { useState, useRef, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import {useCycle, motion} from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import { Icon } from '@iconify/react'

type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };

type MenuItemWithSubMenuProps = {
    item: SideNavItem;
    toggleOpen: () => void;
  };


const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(0px at 100% 0)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };



const HeaderMobile = () => {

    const pathname = usePathname();
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);
    

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            className={`fixed inset-y-0 z-50 w-full sm:hidden ${
            isOpen ? '' : 'pointer-events-none'
            }`}
            ref={containerRef}
        >

        
        <motion.div
            className="absolute inset-y-0 right-0 w-full bg-white"
            variants={sidebar}
        />
        <motion.ul
            variants={variants}
            className="absolute grid w-full gap-3 px-10 py-16"
        >
          {SIDENAV_ITEMS.map((item, idx) => {
            const isLastItem = idx === SIDENAV_ITEMS.length - 1; // Check if it's the last item
  
                return (
                    <div key={idx}>
                        {item.submenu ? (
                            <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
                        ) : (
                            <MenuItem>
                                <Link
                                  href={item.path}
                                  onClick={() => toggleOpen()}
                                  className={`flex gap-2 w-full items-center text-2xl underline underline-offset-8 ${
                                      item.path === pathname ? 'font-semibold decoration-cyan-500' : 'decoration-stone-300'
                                  }`}
                                >
                                {item.icon}{item.title}
                                </Link>
                            </MenuItem>
                        )}
        
                        {!isLastItem && (
                            <MenuItem className={`my-3 h-px`} />
                        )}
                    </div>
                );
            })}
        
        </motion.ul>
            <MenuToggle toggleOpen={toggleOpen} isOpen={isOpen}/>
        </motion.nav>
      
    );
}

export default HeaderMobile

const useDimensions = (ref: any) => {
    const dimensions = useRef({ width: 0, height: 0 });
  
    useEffect(() => {
      if (ref.current) {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
  
    return dimensions.current;
};


const variants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
    closed: {
      transition: { staggerChildren: 0.01, staggerDirection: -1 },
    },
};

export const SIDENAV_ITEMS = [
    {
      title: 'Home',
      path: '/',
      icon: <Icon icon="ion:home-outline" width="24" height="24" />,
    },
    {
      title: 'Gallery',
      path: '/gallery',
      icon: <Icon icon="map:art-gallery" width="24" height="24" />,
    //   submenu: true,
    //   subMenuItems: [
    //     { title: 'All', path: '/projects' },
    //     { title: 'Web Design', path: '/projects/web-design' },
    //     { title: 'Graphic Design', path: '/projects/graphic-design' },
    //   ],
    },
    {
      title: 'Shop',
      path: '/shop',
      icon: <Icon icon="lucide:shopping-cart" width="24" height="24" />,
      // submenu: true,
      // subMenuItems: [
      //   {title: 'Cart', path: '/cart', icon: <Icon icon="tabler:point" width="24" height="24" />}
      // ],
    },
    {
      title: 'Contact',
      path: '/contact-us',
      icon: <Icon icon="lucide:mail" width="24" height="24" />,
    },
    {
        title: 'Appointment',
        path: '/appointment',
        icon: <Icon icon="lucide:calendar-clock" width="24" height="24" />,
      },       
    {
      title: 'Legal',
      path: '/legal',
      icon: <Icon icon="mdi:legal" width="24" height="24" />,
      submenu: true,
      subMenuItems: [
        { title: 'Terms of Service', path: '/terms-of-service', icon: <Icon icon="tabler:point" width="24" height="24"/> },
        { title: 'Privacy Policy', path: '/privacy-policy', icon: <Icon icon="tabler:point" width="24" height="24"/> },
      ],
    },

];

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
  item,
  toggleOpen,
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className="flex w-full text-2xl"
          onClick={() => setSubMenuOpen((subMenuOpen) => !subMenuOpen)}
        >
          <div className="flex flex-row justify-between w-full items-center">
            <span
              className={`flex flex-row gap-2 items-center ${pathname.includes(item.path) ? 'font-bold' : ''}`}
            >
              {item.icon}{item.title}
            </span>
            <div className={`${subMenuOpen && 'rotate-180'}`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </div>
        </button>
      </MenuItem>
      <div className="mt-2 ml-6 flex flex-col space-y-2">
        {subMenuOpen && (
          <>
            {item.subMenuItems?.map((subItem, subIdx) => {
              return (
                <MenuItem key={subIdx}>
                  <Link
                    href={subItem.path}
                    onClick={() => toggleOpen()}
                    className={`flex flex-row gap-2 items-center underline underline-offset-8 ${
                      subItem.path === pathname ? 'font-bold decoration-cyan-500' : 'decoration-stone-300'
                    }`}
                  >
                    {subItem.icon}{subItem.title}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

  


const MenuToggle = ({ isOpen, toggleOpen }: { isOpen: any, toggleOpen: any }) => (
  
  <button
    onClick={() => toggleOpen()}
    className="p-2 border  rounded-md  pointer-events-auto absolute right-6 top-[18px] z-30"
  >
    {isOpen ? (
      <Image 
        src="/close-menu.svg"
        width={30}
        height={30}
        alt="close menu"
        className="dark:invert h-[20px] w-[20px]"
      />        

    ) : (
      <Image 
        src='/hamburger-menu.svg'
        alt='mobile menu'
        width={24}
        height={24}
      />
    )}

  </button>
);

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};
