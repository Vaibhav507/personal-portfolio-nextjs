"use client"

import { usePathname } from 'next/navigation';
import React from 'react';
import { menuLinks, socialLinks } from '@/constants';
import Link from 'next/link';
import {RiGithubLine, RiLinkedinLine, RiMailLine } from '@remixicon/react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Menu = ({ menuOpen,toggleMenu }: {menuOpen: boolean; toggleMenu: ()=> void}) => {

    const pathName = usePathname();

    useGSAP(() => {

      const menuOpenTimeline = gsap.timeline({ pause:true })

      menuOpenTimeline.to(".pages p",{ 
        opacity: 1,  
        y:0,
        display: "block",
        ease: "circ"
      },1);

      menuOpenTimeline.to(".icons", {
        opacity: 1,
        y: 0,
        visibility: "visible",
        ease: "circ"
      },1)

      if(menuOpen)
        menuOpenTimeline.play();
      else
      {
        menuOpenTimeline.revert(); 
      }
      
    },[menuOpen])

    useGSAP(()=>{
      const gitIcon = document.querySelector(".githubIcon")

      const gitTl = gsap.timeline({paused:true})

      gitTl.from(".github",{
        opacity: 0,
        x: 20
      },0)

      gitIcon?.addEventListener("mouseenter",()=>gitTl.play())
      gitIcon?.addEventListener("mouseleave",()=>gitTl.reverse())

      const linkedinIcon = document.querySelector(".linkedinIcon")

      const linkedTl = gsap.timeline({paused:true})

      linkedTl.from(".linkedin",{
        opacity: 0,
        x: 20
      },0)

      linkedinIcon?.addEventListener("mouseenter",()=>linkedTl.play())
      linkedinIcon?.addEventListener("mouseleave",()=>linkedTl.reverse())

      const mailIcon = document.querySelector(".mailIcon")

      const mailTl = gsap.timeline({paused:true})

      mailTl.from(".mail",{
        opacity: 0,
        x: 20
      },0)

      mailIcon?.addEventListener("mouseenter",()=>mailTl.play())
      mailIcon?.addEventListener("mouseleave",()=>mailTl.reverse())
    })
    
   const socialIcons = [<RiGithubLine />,<RiLinkedinLine />,<RiMailLine />]

  return (
    <div className={`overflow-y-hidden fixed top-0 min-h-screen w-full bg-black flex justify-end gap-20 items-start flex-col sm:justify-between sm:items-end sm:flex-row sm:pb-32 pb-12 px-8 lg:px-16 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-1000`}>
        <div className="flex flex-col gap-10 pages">
            {menuLinks.map((link) => {
                const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`);

                return (
                    <Link href={link.route} key={link.label} className={isActive ? 'text-[#fff]' :'text-[#282828]'} >
                        <p className="text-4xl leading-tight lg:text-5xl xl:text-7xl md:text-5xl lg:leading-tight md:leading-tight cursor:pointer opacity-0 translate-y-12 hidden"  onClick={toggleMenu}>
                            {link.label}
                        </p>
                    </Link>
                )
            })}
        </div>
        
        <div className="socials flex sm:flex-col gap-10">
            {socialLinks.map((link)=>{
                return(
                    <div key={link.i} className="flex justify-end items-center gap-4 social-1">
                        <p className={`social-name bg-white text-black rounded-full social-1 px-5 py-2 hidden sm:block ${link.className}`}>{link.name}</p>
                        <a href={link.href} target="_blank"><div color="white" className={`icons flex justify-center items-center w-[50px] h-[50px] bg-[#222] rounded-full opacity-0 translate-y-12 hover:bg-white hover:text-[#111] hover:scale-110 ${link.classIcon} p-3`}>{socialIcons[link.i]}</div></a>
                    </div>
                )
        })}
        </div>
    </div>
  )
}

export default Menu