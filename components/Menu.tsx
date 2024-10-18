"use client"

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { menuLinks, socialLinks } from '@/constants';
import Link from 'next/link';
import { RiGithubFill, RiGithubLine, RiLinkedinFill, RiLinkedinLine, RiMailFill, RiMailLine } from '@remixicon/react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Menu = ({ menuOpen,toggleMenu }: {menuOpen: boolean; toggleMenu: ()=> void}) => {

    const pathName = usePathname();

    useGSAP(() => {

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
    <div className={`overflow-y-hidden fixed top-0 min-h-screen w-full bg-black flex justify-between items-center px-8 sm:px-48 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-1000`}>
        <div className="flex flex-col gap-10 h-fit">
            {menuLinks.map((link) => {
                const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`);

                return (
                    <Link href={link.route} key={link.label} className={isActive ? 'text-[#fff]' :'text-[#282828]'} >
                        <p className="text-4xl leading-tight lg:text-5xl xl:text-7xl md:text-5xl lg:leading-tight md:leading-tight" onClick={toggleMenu}>
                            {link.label}
                        </p>
                    </Link>
                )
            })}
        </div>
        
        <div className="absolute sm:bottom-40 bottom-10 right-8 lg:right-16 socials flex sm:flex-col gap-10 self-end">
            {socialLinks.map((link)=>{
                return(
                    <div key={link.i} className="flex justify-end items-center gap-4 social-1">
                        <p className={`social-name bg-white text-black rounded-full social-1 px-5 py-2 ${link.className}`}>{link.name}</p>
                        <a href={link.href} target="_blank"><div color="white" className={`icons flex justify-center items-center w-[50px] h-[50px] bg-[#222] rounded-full ${link.classIcon} p-3`}>{socialIcons[link.i]}</div></a>
                    </div>
                )
            
        })}
        </div>
    </div>
  )
}

const expert = () => {
    return(
<>
<div className="flex justify-end items-center gap-4 ">
        <p className="social-name bg-white text-black rounded-full social-1 px-5 py-2 github">GitHub</p>
        <a href="https://github.com/Vaibhav507" target="_blank"><RiGithubLine color="white" className="icons githubIcon"></RiGithubLine></a>
    </div>
      <div className="flex justify-end items-center gap-4 social-2">
        <p className="social-name  bg-white text-black rounded-full social-1 px-5 py-2  linkedin">LinkedIn</p>
        <a href="https://www.linkedin.com/in/vaibhav-madan-386927200/" target="_blank" rel="noopener noreferrer"><RiLinkedinLine color="white" className="icons linkedinIcon"></RiLinkedinLine></a>
      </div>
      <div className="flex justify-end items-center gap-4  social-3">
        <p className="social-name  bg-white text-black rounded-full social-1 px-5 py-2  mail">Connect on Mail</p>
        <a href="mailto:vaibhavpratham507@gmail.com"><RiMailLine color="white" className="icons mailIcon"></RiMailLine></a>
      </div>
</>
    )
}

export default Menu