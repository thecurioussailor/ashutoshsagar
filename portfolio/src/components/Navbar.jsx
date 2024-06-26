import React, { useState } from 'react'
import { FaBeer, FaCross, FaHamburger, FaWatchmanMonitoring, FaWindowClose } from "react-icons/fa";
function Navbar() {

    const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
        <nav id="desktop-nav" className="hidden lg:flex justify-around items-center h-[14vh]">
            <div class="logo" className='text-4xl hover:cursor-default'>Ashutosh Sagar</div>
            <div>
                <ul class="nav-links" className='flex gap-8 list-none text text-2xl'>
                <li><a href="#about" className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]'>About</a></li>
                <li><a className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]' href="#experience">Experience</a></li>
                <li><a className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]' href="#projects">Projects</a></li>
                <li><a className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]' href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <nav id="hamburger-nav" className='flex justify-around items-center h-[17vh] lg:hidden'>
            <div class="logo" className='mt-6 text-4xl hover:cursor-default'>Ashutosh Sagar</div>
            <div class="hamburger-menu" className=' relative inline-block'>
                <div class="hamburger-icon" className='flex items-center p-5 flex-col justify-between transition-all h-6 w-[30px]' onclick="toggleMenu()">
                  <button className='' onClick={() => setIsOpen(!isOpen)}>
                    <span className={`${isOpen ? "block" : "hidden"}`}><FaHamburger size={30}/></span>
                    <span className={`${isOpen ? "hidden" : "block"}`}><FaWindowClose size={30}/></span>
                  </button>
                  
                </div>
                <div class="menu-links" className={`mt-4 absolute top-full right-0 bg-white w-fit max-h-0 transition-all ${isOpen ? "hidden" : "block"}`}>
                    <li className='list-none'><a className='block p-1 text-center text-2xl text-black no-underline' href="#about">About</a></li>
                    <li className='list-none'><a className='block p-1 text-center text-2xl text-black no-underline' href="#experience">Experience</a></li>
                    <li className='list-none'><a className='block p-1 text-center text-2xl text-black no-underline' href="#projects">Projects</a></li>
                    <li className='list-none'><a className='block p-1 text-center text-2xl text-black no-underline' href="#contact">Contact</a></li>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar