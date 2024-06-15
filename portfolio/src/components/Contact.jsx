import React from 'react'
import Mail from "../assets/email.png"
import { BsMailbox, BsTwitter } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
function Contact() {
  return (
    <>
        <section id='contact' className='flex flex-col justify-center gap-[1rem] pt-[1vh] mx-[5rem] lg:mx-[10rem] box-border h-fit min-h-[70vh]'>
            <p className='text-center text-zinc-500'>Get in Touch</p>
            <h1 className='text-center text-5xl mb-[2rem]'>Contact Me</h1>
            <div className='flex justify-center rounded-[2rem] border-2 border-zinc-500 mx-auto'>
              <div className='flex items-center justify-center gap-[0.5rem] m-[1rem]'>
                {/* <img className='h-[2.5rem]' src={Mail}/> */}
                <p>
                  <a className='flex gap-2 text-black no-underline decoration-white hover:underline-offset-8 hover:underline hover:text-zinc-400 hover:decoration-zinc-400' href='mailto:ashu.sagar111@gmail.com'><MdMail className='text-[1.5rem]'/>ashu.sagar111@gmail.com</a>
                </p>
              </div>
              <div className='flex items-center justify-center gap-[0.5rem] m-[1rem]'>
                {/* <img className='h-[2.5rem]' src={Mail}/> */}
                <p>
                  <a className='flex gap-2 text-black no-underline decoration-white hover:underline-offset-8 hover:underline hover:text-zinc-400 hover:decoration-zinc-400' href='https://x.com/sagar11ashutosh'><BsTwitter className='text-[1.5rem]'/>@sagar11ashutosh</a>
                </p>
              
              </div>
              <div className='flex items-center justify-center gap-[0.5rem] m-[1rem]'>
                {/* <img className='h-[2.5rem]' src={Mail}/> */}
                <p>
                  <a className='flex gap-2 text-black no-underline decoration-white hover:underline-offset-8 hover:underline hover:text-zinc-400 hover:decoration-zinc-400' href='https://x.com/sagar11ashutosh'><FaLinkedin className='text-[1.5rem]'/>ashutosh-sagar-4b2612185</a>
                </p>
              
              </div>
            </div>
        </section>
    </>
  )
}

export default Contact