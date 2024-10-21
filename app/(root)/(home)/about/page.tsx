"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';
import React from "react";

//import Footer from "./Footer";

function About() {

    useGSAP(()=> {
        gsap.from(".skills p",{
            opacity: 0,
            y: -20,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".skills",
                scrub: true,
                end: "bottom bottom",
                start: "top center"
            }
        })

        gsap.from(".skills .divider",{
            width: "0px",
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".skills",
                scrub: true,
                end: "bottom bottom",
                start: "top center"
            }
        })

        gsap.from(".about-section",{
            x:-20,
            opacity: 0,
            stagger:0.5,
            delay: 2,
            scrollTrigger:".about-section"
        })

    })

    return(
        <>
        <div className="flex flex-col pt-40 gap-28 about-section">
            <div className="flex flex-col justify-center items-start gap-10 ">
                <p className="uppercase tracking-widest text-xs sm:text-[12px] md:text-[12px] lg:tracking-[3px] font-semibold">About Me</p>
                <p className="text-2xl leading-tight lg:text-5xl md:text-4xl lg:leading-tight md:leading-tight font-bold">
                Driven by a passion for design and technology, I’m dedicated to crafting well-designed websites and apps.
                I love blending creativity with technology, turning inspiration into unique digital experiences. My focus 
                is on creating user-friendly designs with attention to detail, ensuring each project is both visually 
                stunning and highly functional.
                </p>
            </div>
            <div className="skills flex flex-col gap-4"> 
                <h1 className="uppercase tracking-widest text-xs sm:text-[12px] md:text-[14px] lg:tracking-[3px] font-semibold">Tech stack</h1>
                <div className="divider"></div>
                <p className="text-[40px] leading-tight  lg:text-[6.04vw] md:text-6xl lg:leading-tight md:leading-tight">HTML</p>
                <div className="h-[0.5px] bg-white divider"></div>
                <p className="text-[40px] leading-tight  lg:text-[6.04vw] md:text-6xl lg:leading-tight md:leading-tight">CSS</p>
                <div className="h-[1px] bg-white divider"></div>
                <p className="text-[40px] leading-tight  lg:text-[6.04vw] md:text-6xl lg:leading-tight md:leading-tight">JavaScript</p>
                <div className="h-[1px] bg-white divider"></div>
                <p className="text-[40px] leading-tight  lg:text-[6.04vw] md:text-6xl lg:leading-tight md:leading-tight">ReactJs</p>
                <div className="h-[1px] bg-white divider"></div>
                <p className="text-[40px] leading-tight  lg:text-[6.04vw] md:text-6xl lg:leading-tight md:leading-tight">GSAP</p>
                <div className="h-[1px] bg-white divider"></div>
                <p className="text-[40px] leading-tight  lg:text-[6.04vw] md:text-6xl lg:leading-tight md:leading-tight">Typescript</p>
                <div className="h-[1px] bg-white divider"></div>
                <p className="text-[40px] leading-tight  lg:text-[6.04vw] md:text-6xl lg:leading-tight md:leading-tight">NextJs</p>
                <div className="h-[1px] bg-white divider"></div>
                <p className="text-[40px] leading-tight  lg:text-[6.04vw] md:text-6xl lg:leading-tight md:leading-tight">Figma</p>
                <div className="h-[1px] bg-white divider"></div>
                <p className="text-[40px] leading-tight  lg:text-[6.04vw] md:text-6xl lg:leading-tight md:leading-tight">Open to Learning new Tech</p>
                <div className="h-[1px] bg-white w-0 divider"></div>
            </div>
        </div>
     
        </>
    )
}

export default About