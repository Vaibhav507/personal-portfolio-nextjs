"use client"

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { menuLinks } from '@/constants';
import Link from 'next/link';

const Menu = ({ menuOpen,toggleMenu }: {menuOpen: boolean; toggleMenu: ()=> void}) => {

const pathName = usePathname();
    
  return (
    <div className={`absolute top-0 left-0 min-h-screen w-full bg-black flex justify-start items-center px-8 sm:px-48 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-1000`}>
        <div className="flex flex-col gap-10">
            {menuLinks.map((link) => {
                const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`);

                return (
                    <Link href={link.route} key={link.label} className={isActive ? 'text-[#fff]' :'text-[#282828]'} >
                        <p className="text-3xl leading-tight lg:text-7xl md:text-6xl lg:leading-tight md:leading-tight" onClick={toggleMenu}>
                            {link.label}
                        </p>
                    </Link>
                )
            })}

        </div>
        <div className="socials"></div>
    </div>
  )
}

export default Menu