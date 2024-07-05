import React from 'react'
import ProfilePic from "../assets/profile-pic.png"
import HeroPic from "../assets/ashutoshsagar.png"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
function Profile() {
  return (
    <div >
        <section id='profile' className='block lg:flex justify-center gap-[5rem] pt-[4vh] lg:min-h-[80vh] lg:mx-[10rem] box-border min-h-fit'>
            <div className='lg:flex flex flex-col justify-center my-auto max-w-full'>
                <img className='mx-auto rounded-full bg-gradient-to-r from-stone-300 to-zinc-300 lg:h-96 lg:w-96 h-72 w-72 max-w-full max-h-full' src={HeroPic} alt="Ashutosh Sagar"/>
            </div>
            <div className='self-center text-center'>
                <p className='font-semibold text-center mt-4'>Hello, I'm</p>
                <h1 className='text-[3rem] text-center'>Ashutosh Sagar</h1>
                <p className='font-semibold text-[1.7rem] mb-[1rem]'>Fullstack Developer</p>
                <div className='flex justify-center gap-[1rem]'>
                    <a href='https://drive.google.com/file/d/16YOmpS4WAiqfw5aewdNGxY4SaU5ONbzP/view?usp=sharing' target='_blank'>
                        <button className='font-semibold p-4 border-2 rounded-3xl'>
                            Download CV
                        </button>
                    </a>
                    <a href='#contact'>
                        <button className='font-semibold p-4 border-2 rounded-3xl'>
                            Contact Info
                        </button>
                    </a>
                </div>
                <div className='flex justify-center mt-[1rem] gap-4'>
                    <a className='cursor-pointer h-[2rem]' href='https://github.com/thecurioussailor' target='_blank'><FaGithub/></a>
                    <a className='h-[2rem]' href='https://x.com/sagar11ashutosh' target='_blank'><FaTwitter/></a>
                    <a className='h-[2rem]' href='https://www.linkedin.com/in/ashutosh-sagar-4b2612185/' target='_blank'><FaLinkedin/></a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Profile