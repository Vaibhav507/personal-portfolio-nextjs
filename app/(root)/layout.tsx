import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "VaibhavMadan",
  description: "Personal Portfolio",
};

const RootLayout = ({children}:{children : ReactNode}) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default RootLayout