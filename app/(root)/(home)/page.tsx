import React from 'react'

const Home = () => {
  return (
    <section className='flex flex-col gap-10'>
      <p className='uppercase text-xs tracking-[3px] sm:text-[14px] lg:text-[0.83vw] font-bold'>Hello there!</p>
      <p className='text-[40px] leading-tight  min-[480px]:text-[60px] md:text-[80px] lg:text-[6.04vw] font-bold'>
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