import React, { useEffect, useState } from 'react'
import { FaBeer, FaCross, FaHamburger, FaWatchmanMonitoring, FaWindowClose } from "react-icons/fa";
import Logo from "../assets/ashu-dark12.png"
function Navbar() {

    const [isOpen, setIsOpen] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 30) {
              setIsScrolled(true);
          } else {
              setIsScrolled(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <div>
        <nav id="desktop-nav" className={`hidden lg:fixed z-20 lg:flex-row lg:w-full bg-[#000] lg:flex justify-around transition-all duration-300 ease-in-out items-center ${isScrolled ? 'h-[8vh]': 'h-[12vh]'} `}>
            <div class="logo" className=' flex items-center w-[400px] hover:cursor-default text-white font-sofadi'>
              <img className='object-cover' src={Logo} width={250}/>
            </div>
            <div>
                <ul class="nav-links" className='flex gap-8 list-none text text-xl text-white'>
                <li><a href="#about" className=' no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[.5rem] hover:decoration-[#b5b5b5]'>About</a></li>
                <li><a className='no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[.5rem] hover:decoration-[#b5b5b5]' href="#experience">Experience</a></li>
                <li><a className='no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[.5rem] hover:decoration-[#b5b5b5]' href="#projects">Projects</a></li>
                <li><a className='no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[.5rem] hover:decoration-[#b5b5b5]' href="#contact">Contact</a></li>
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