"use client"

import React, { ReactNode, useState } from 'react';
import Navbar from '@/components/Navbar';



const HomeLayout = ({children}:{children : ReactNode}) => {

  const [menuOpen, setmenuOpen] = useState(false);
  const toggleMenu = () => {
    setmenuOpen(!menuOpen)
  }

  return (
    <main className='relative overflow-x-hidden'>
        <Navbar />
        <div className="flex">
            <section className="flex flex-1 min-h-screen px-8 sm:px-28 md:px-48 justify-start items-center">
                    {children}
            </section>
        </div>
    </main>
  )
}

export default HomeLayout