import React from 'react'
import AboutPic from "../assets/about-pic.png"
import ExpIcon from "../assets/experience.png"
import Education from "../assets/education.png"
function About() {
  return (
    <div className='relative'>
        <section id='#about'>
            <p className='text-center'>Get to know more</p>
            <h1 className='text-center text-5xl'>About Me</h1>
            <div className='lg:flex'>
                <div className='flex h-[400px] w-[400px] my-auto mx-auto'>
                    <img className='rounded-[2rem]' src={AboutPic}/>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='gap-[2rem] my-[2rem]'>
                        <div className='p-[1.5rem] flex-1 text-center'>
                            <img className='h-[2rem]' src={ExpIcon}/>
                            <h3>Experience</h3>
                            <p>1+ year <br/> Frontend Developer</p>
                        </div>
                        <div>
                            <img className='h-[2rem]' src={Education}/>
                            <h3>Education</h3>
                            <p>Master of Computer Application <br/> Bachelor of Computer Application</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officia laboriosam nobis blanditiis nulla id, rerum amet in dolor 
                            odit sunt ad! Et ea inventore eaque, magni optio dignissimos at animi
                             doloribus tempora voluptates laboriosam itaque quis 
                             accusamus ducimus asperiores dolorem perspiciatis
                              dolorum corporis delectus adipisci corrupti sunt nihil, ipsam omnis?
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