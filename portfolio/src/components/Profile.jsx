import React from 'react'
import ProfilePic from "../assets/profile-pic.png"
import HeroPic from "../assets/ashutoshsagar.png"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
function Profile() {
  return (
    <div >
        <section id='profile' className='flex justify-center gap-[5rem] h-[90vh] pt-[4vh] mx-[10rem] box-border min-h-fit'>
            <div className='lg:flex hidden h-[450px] w-[400px] my-auto mx-0'>
                <img className='rounded-full bg-gradient-to-r from-stone-300 to-zinc-300 h-96 w-96' src={HeroPic} alt="Ashutosh Sagar"/>
            </div>
            <div className='self-center text-center'>
                <p className='font-semibold text-center'>Hello, I'm</p>
                <h1 className='text-[3rem] text-center'>Ashutosh Sagar</h1>
                <p className='font-semibold text-[1.7rem] mb-[1rem]'>Frontend Developer</p>
                <div className='flex justify-center gap-[1rem]'>
                    <button className='font-semibold p-4 border-2 rounded-3xl'>
                        Download CV
                    </button>
                    <button className='font-semibold p-4 border-2 rounded-3xl'>
                        Contact Info
                    </button>
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