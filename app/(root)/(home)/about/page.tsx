"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';
import React from "react";
import { skills } from "@/constants";
import Footer from "@/components/Footer";

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
                start: "top center",
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
            delay: 1,
            scrollTrigger:".about-section"
        })
    });

    return(
        <>
        <div className="flex flex-col pt-40 gap-28 about-section cursor-default">
            <div className="flex flex-col justify-center items-start gap-10 ">
                <p className="uppercase text-xs tracking-[3px] sm:text-[14px] lg:text-[0.83vw] font-bold">About Me</p>
                <p className="text-2xl font-bold leading-[1.3] md:text-[32px] lg:text-[2.9vw] lg:leading-tight">
                Driven by a passion for design and technology, I’m dedicated to crafting well-designed websites, 
                blending creativity with technology. My focus 
                is on creating user-friendly designs with attention to detail, ensuring each project is both visually 
                stunning and highly functional.
                </p>
            </div>
            <div className="skills flex flex-col gap-4"> 
                {skills.map((skill,index)=>{
                    return (
                        <div key={index}>
                        <p className="text-[40px] leading-tight  min-[480px]:text-[60px] md:text-[80px] lg:text-[6.04vw] font-normal">{skill}</p>
                        <div className="h-[0.5px] bg-white divider"></div>
                        </div>
                    )
                })}
            </div>
            <Footer></Footer>
        </div>
        
        </>
    );
};

export default About;