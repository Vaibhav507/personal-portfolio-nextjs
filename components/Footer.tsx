import { useRef } from "react";
import { RiArrowRightUpLine, RiHeart3Fill, RiGithubLine, RiLinkedinLine } from "@remixicon/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';

function Footer() {

    const buttonRef = useRef(null)
    useGSAP(()=> {
        const tl = gsap.timeline()

        gsap.from(".greeting",{
            x:-20,
            opacity: 0,
            stagger:0.5,
            delay: 1,
            scrollTrigger:".footer"
        })

        gsap.from(".intro",{
            y:20,
            opacity: 0,
            stagger:0.5,
            delay: 2,
            scrollTrigger:".footer"
        })
        
        tl.to(".goto-mail", {
            scale: 1.1,
        },0)

        tl.to(".arrow",{
            rotate: 360,
        },0)

        tl.pause()
        // @ts-expect-error: err
        buttonRef.current.addEventListener("mouseenter",function () {
            tl.play()
            
        })
        // @ts-expect-error: err
        buttonRef.current.addEventListener("mouseleave",function () {
            tl.reverse()
        })
    })

    const currentYear = new Date().getFullYear()

    return(
        <div className="flex flex-col pt-40 gap-10  pb-20 sm:pb-36 footer">
            <p className="uppercase text-xs tracking-[3px] sm:text-[14px] lg:text-[0.83vw] font-bold greeting">Like What you see?</p>
            <p className="text-[40px] leading-tight  min-[480px]:text-[60px] md:text-[80px] lg:text-[6.04vw] font-bold intro">Let&apos;s Talk</p>
            <div className="footer-buttons contact-me-bottom flex flex-col justify-center items-start sm:flex-row gap-8 sm:gap-0 sm:justify-between ">
                <a href="mailto:vaibhavpratham507@gmail.com" className="mail-contact-me w-full sm:w-[auto]"><div className="goto-mail bg-[#333] flex justify-center items-center py-5 px-14 rounded-full gap-4 hover:bg-white hover:text-[#111]" ref={buttonRef}><p className="button-text">Send me a mail</p><RiArrowRightUpLine className="arrow" /></div></a>
                <div className="flex gap-4">
                    <a href="https://github.com/Vaibhav507" target="_blank"><RiGithubLine className="footer-icons bg-[#222] p-3 w-[50px] h-[50px] rounded-full hover:bg-white hover:text-[#111] hover:scale-110"/></a>
                    <a href="https://www.linkedin.com/in/vaibhav-madan-386927200/" target="_blank"><RiLinkedinLine className="footer-icons bg-[#222] p-3 w-[50px] h-[50px] rounded-full hover:bg-white hover:text-[#111] hover:scale-110"/></a>
                </div>
            </div>
            <hr />
            <div className="flex flex-col justify-center items-start sm:flex-row gap-8 sm:gap-0 sm:justify-between text-xs min-[480px]:text-sm lg:text-[0.83vw]">
                <p>@{currentYear}</p>
                <p className="flex justify-center items-center gap-1">Designed and Created with <RiHeart3Fill className="heart text-red-700"/> by Vaibhav Madan</p>
            </div>
            
        </div>
        
    )
}

export default Footer