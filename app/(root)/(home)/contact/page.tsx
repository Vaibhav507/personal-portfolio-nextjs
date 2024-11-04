"use client"

import { useRef } from "react";
import React from "react";
import { RiGithubLine, RiLinkedinLine, RiArrowRightUpLine, RiInstagramLine } from "@remixicon/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {

    const paragraphRef = useRef(null);
    const buttonRef = useRef(null)
    useGSAP(()=> {
        const tl = gsap.timeline()
        
        tl.to(".goto-mail", {
            scale: 1.1,
        },0)

        tl.to(".arrow",{
            rotate: 360,
        },0)

        tl.pause()
        // @ts-expect-error
        buttonRef.current.addEventListener("mouseenter",function () {
            tl.play()
            
        })
        // @ts-expect-error
        buttonRef.current.addEventListener("mouseleave",function () {
            tl.reverse()
        })
        // @ts-expect-error
        const split1 = new SplitType(paragraphRef.current.children[0], { types: "lines" });
        // @ts-expect-error
        const split2 = new SplitType(paragraphRef?.current.children[1], { types: "lines" });

    
    gsap.set(split1.lines, { opacity: 0 });
    gsap.set(split2.lines, { opacity: 0 });
    gsap.set(".footer-buttons", {opacity: 0})

    
    const tl1 = gsap.timeline({ delay: 1 });

    
    tl1.to(split1.lines, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.3,
      ease: "power2.inOut",
    });

    
    tl1.to(split2.lines, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.3,
      ease: "power2.inOut",
    });

    tl1.from(".divider",{
        width: "0px",
        duration: 0.5,
        ease: "power2.inOut",
    })

    tl1.to(".footer-buttons", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
    });

    })

    return (
        <div className="flex flex-col gap-10 sm:gap-20 pt-36 sm:pt-10 w-full">
            <div className="flex flex-col gap-6 sm:gap-10" ref={paragraphRef}>
                <p className="uppercase text-xs tracking-[3px] sm:text-[14px] lg:text-[0.83vw] font-bold">Say Hello?</p>
                <p className="text-2xl font-bold leading-[1.3] md:text-[32px] lg:text-[2.9vw] lg:leading-tight">Let&apos;s collaborate. Feel free to drop me a line about your project or follow me on social networks</p>
            </div>
            <div className="divider h-[1px] bg-white"></div>
            <div className="contact-bottom">
            <div className="footer-buttons contact-me-bottom flex flex-col justify-center items-center sm:flex-row gap-8 sm:gap-0 sm:justify-between ">
                <a href="mailto:vaibhavpratham507@gmail.com" className="mail-contact-me w-full sm:w-[auto]"><div className="goto-mail bg-[#333] flex justify-center items-center py-5 px-14 rounded-full gap-4 hover:bg-white hover:text-[#111]" ref={buttonRef}><p className="button-text">Send me a mail</p><RiArrowRightUpLine className="arrow" /></div></a>
                <div className="social-buttons contact-social-buttons flex gap-4">
                    <a href="https://github.com/Vaibhav507" target="_blank"><RiGithubLine className="footer-icons bg-[#222] p-3 w-[50px] h-[50px] rounded-full hover:bg-white hover:text-[#111] hover:scale-110"/></a>
                    <a href="https://www.linkedin.com/in/vaibhav-madan-386927200/" target="_blank"><RiLinkedinLine className="footer-icons bg-[#222] p-3 w-[50px] h-[50px] rounded-full hover:bg-white hover:text-[#111] hover:scale-110"/></a>
                    <a href="https://www.instagram.com/madanvaibhav11/" target="_blank"><RiInstagramLine className="footer-icons bg-[#222] p-3 w-[50px] h-[50px] rounded-full hover:bg-white hover:text-[#111] hover:scale-110"/></a>
                </div>
            </div>
            </div>
        </div>

    )
}


export default Contact