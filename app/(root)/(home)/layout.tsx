"use client"

import React, { ReactNode, useState } from 'react';
import Navbar from '@/components/Navbar';
import { useGSAP } from '@gsap/react'
import gsap from "gsap";



const HomeLayout = ({children}:{children : ReactNode}) => {

  useGSAP(()=>{
    window.addEventListener("mousemove", function(dets) {
      gsap.to("#cursor", {
          x: dets.x,
          y: dets.y,
          duration: 1,
      })
    })
  })

  const [menuOpen, setmenuOpen] = useState(false);
  const toggleMenu = () => {
    setmenuOpen(!menuOpen)
  }

  return (
    <main className='relative overflow-x-hidden'>
      <div className="h-5 w-5 bg-white rounded-full fixed z-[100] mix-blend-difference hidden xl:block" id='cursor'></div>
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