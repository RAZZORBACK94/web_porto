"use client"

import { navbarLink } from '@/app/constant';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
}

  return (
    <div className='flex fixed top-0 z-50 p-5 justify-end w-full'>
        <button onClick={toggleMenu} className='group p-3 w-max bg-black rounded-full hover:border-2 hover:border-black hover:bg-white transition-all'>
            {menuOpen? 
                <IoMdClose className='size-10 fill-white group-hover:fill-black '/>
                : 
                <IoMdMenu className='size-10 fill-white group-hover:fill-black '/>
            }
            
            
        </button>

        <div className={`absolute top-28 ${menuOpen? `right-5` : `-right-32`} flex flex-col space-y-5 w-max items-end transition-all`}>
            {navbarLink.map((item) => (
                <Link href={item.url} className='bg-black w-max p-2 text-white text-xl rounded-xl hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all'>{item.title}</Link>
            ))}
        </div>
    </div>
  )
}
