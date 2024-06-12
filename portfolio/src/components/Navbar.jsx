import React, { useState } from 'react'
import { FaBeer, FaCross, FaHamburger, FaWatchmanMonitoring, FaWindowClose } from "react-icons/fa";
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <nav id="desktop-nav" className="hidden lg:flex justify-around items-center h-[17vh]">
            <div class="logo" className='text-4xl hover:cursor-default'>Ashutosh Sagar</div>
            <div>
                <ul class="nav-links" className='flex gap-8 list-none text text-2xl'>
                <li><a className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]' href="#about">About</a></li>
                <li><a className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]' href="#experience">Experience</a></li>
                <li><a className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]' href="#projects">Projects</a></li>
                <li><a className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]' href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <nav id="hamburger-nav" className='flex justify-around items-center h-[17vh] lg:hidden'>
            <div class="logo" className='text-4xl hover:cursor-default'>Ashutosh Sagar</div>
            <div class="hamburger-menu" className=' relative inline-block'>
                <div class="hamburger-icon" className='flex items-center p-5 flex-col justify-between transition-all h-6 w-[30px]' onclick="toggleMenu()">
                  <button onClick={() => setIsOpen(!isOpen)}>
                    <span className={`${isOpen ? "block" : "hidden"}`}><FaHamburger/></span>
                    <span className={`${isOpen ? "hidden" : "block"}`}><FaWindowClose/></span>
                  </button>
                  
                </div>
                <div class="menu-links" className={`absolute top-full right-0 bg-white w-fit max-h-0 transition-all ${isOpen ? "hidden" : "block"}`}>
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