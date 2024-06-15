import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='min-h-[26vh]'>
            <div>
                <ul class="nav-links" className='flex justify-center gap-8 list-none text text-2xl mb-[2rem]'>
                <li><a href="#about" className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]'>About</a></li>
                <li><a className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]' href="#experience">Experience</a></li>
                <li><a className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]' href="#projects">Projects</a></li>
                <li><a className='text-black no-underline decoration-white hover:text-gray-400 hover:underline hover:underline-offset-[1rem] hover:decoration-[#b5b5b5]' href="#contact">Contact</a></li>
                </ul>
            </div>
            <p className='text-center text-zinc-400'>Copyright 2024 Ashutosh Sagar. All Rights Reserved.</p>
        </footer>
    </div>
  )
}

export default Footer