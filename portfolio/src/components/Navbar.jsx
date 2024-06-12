import React from 'react'

function Navbar() {
  return (
    <div>
        <nav id="desktop-nav" className="flex justify-around items-center h-[17vh]">
            <div class="logo">Ashutosh Sagar</div>
            <div>
                <ul class="nav-links" className='flex gap-8 list-none text text-2xl'>
                <li><a className='text-black no-underline decoration-white hover:text-gray-400' href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <nav id="hamburger-nav" className='flex'>
            <div class="logo">Ashutosh Sagar</div>
            <div class="hamburger-menu">
                <div class="hamburger-icon" onclick="toggleMenu()">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="menu-links">
                    <li><a href="#about" onclick="toggleMenu()">About</a></li>
                    <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
                    <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
                    <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar