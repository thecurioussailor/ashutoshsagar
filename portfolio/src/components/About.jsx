import React from 'react'
import AboutPic from "../assets/ashu-redfort.png"
import ExpIcon from "../assets/experience.png"
import Education from "../assets/education.png"
import { MdBatchPrediction } from 'react-icons/md'
function About() {
  return (
    <div className='relative'>
        <section id='about' className='flex flex-col justify-center gap-[1rem] pt-[1vh] mx-[5rem] lg:mx-[10rem] box-border h-fit min-h-[100vh]'>
            <p className='text-center text-zinc-500'>Get to know more</p>
            <h1 className='text-center text-5xl'>About Me</h1>
            <div className='lg:flex justify-between items-center w-full'>
                <div className='flex lg:h-[400px] w-[40%] my-auto mx-auto'>
                    <img className='rounded-[2rem]' src={AboutPic}/>
                </div>
                <div className='flex mx-auto flex-col justify-center w-[60%]'>
                    <div className='md:flex lg:flex gap-[2rem] my-[2rem]'>
                        <div className='p-[1rem] lg:p-[1.5rem] md:p-[1.5rem] flex-1 text-center bg-white border-2 border-solid border-slate-700 rounded-[2rem]'>
                            <img className='h-[2rem] mb-2 mx-auto' src={ExpIcon}/>
                            <h3 className='font-semibold'>Experience</h3>
                            <p className='text-zinc-500'>1+ year <br/> Fullstack Developer</p>
                        </div>
                        <div className='p-[1rem] lg:p-[1.5rem] md:p-[1.5rem] mt-4 md:mt-0 lg:mt-0 flex-1 text-center bg-white border-2 border-solid border-slate-700 rounded-[2rem]'>
                            <img className='h-[2rem] mb-2 mx-auto' src={Education}/>
                            <h3 className='font-semibold'>Education</h3>
                            <p className='text-zinc-500'>Master of Computer Application <br/> Jawaharlal Nehru University, New Delhi </p>
                        </div>
                    </div>
                    <div>
                        <p className='text-zinc-500 text-justify'>
                        I'm Ashutosh Sagar, a Full Stack Developer with an MCA from Jawaharlal Nehru University, New Delhi. 
                        I excel in building high-performance web applications and have a proven track record 
                        with projects like e-commerce platforms and crypto trackers. 
                        <br/><br/>Let's connect and turn your vision into reality!
                        </p>
                    </div>
                </div>

            </div>
            <img/>
        </section>
    </div>
  )
}

export default About