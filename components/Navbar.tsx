import Link from 'next/link'
import React from 'react'

const Navbar = ({toggleMenu} : {toggleMenu: ()=> void }) => {
  return (
    <nav className='flex justify-between items-center fixed z-50 w-full px-8 py-8 lg:px-16'>
      <Link href='/'><div className="bg-white rounded-full w-5 h-5"></div></Link>
      <p onClick={toggleMenu}>menu-icon</p>
    </nav>
  )
}

export default Navbar