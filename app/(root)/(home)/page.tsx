"use client"
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import React from 'react'

const Home = () => {

  useGSAP(()=>{

    const tl = gsap.timeline({ delay: 1 });

    tl.from(".greeting",{
      y:-50,
      duration: 1,
      opacity: 0
  })

  tl.from(".intro",{
      y:50,
      duration: 1,
      opacity: 0,
  })

  },[])

  return (
    <section className='flex flex-col gap-10'>
      <p className='uppercase text-xs tracking-[3px] sm:text-[14px] lg:text-[0.83vw] font-bold greeting'>Hello there!</p>
      <p className='text-[40px] leading-tight  min-[480px]:text-[60px] md:text-[80px] lg:text-[6.04vw] font-bold intro'>
        I'm Vaibhav Madan, 
        <br />
        <span>
          a creative Frontend
        </span>
        <br /> 
        developer.
        </p>
    </section>
  )
}

export default Home