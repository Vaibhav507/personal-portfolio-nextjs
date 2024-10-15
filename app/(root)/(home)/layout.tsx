import { Metadata } from 'next';
import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
    title: "VaibhavMadan",
    description: "Personal Portfolio",
  };

const HomeLayout = ({children}:{children : ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar />
        <div className="flex">
            <section className="flex flex-1 min-h-screen px-8 sm:px-48 justify-start items-center">
                    {children}
            </section>
        </div>
    </main>
  )
}

export default HomeLayout