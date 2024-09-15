import React from 'react'
import ProjectItem from './ProjectItem';
import Project1 from "../assets/swarna-pic.png"
import Project2 from "../assets/t-Sizzle.png"
import Project3 from "../assets/qt1.png"
import Project4 from "../assets/Heading.png"

const projects = [
  {
    img: Project1,
    title:"Swarna",
    git:"https://github.com/thecurioussailor/swarna",
    live:"https://swarna.vercel.app/"
  },
  {
    img: Project2,
    title:"t-Sizzle",
    git:"https://github.com/thecurioussailor/tsizzle",
    live:"https://tsizzle.vercel.app/"
  },
  {
    img: Project3,
    title:"Quick Transfer",
    git:"https://github.com/thecurioussailor/payTmApp",
    live:"https://quicktransfer.netlify.app/"
  },
  {
    img: Project4,
    title:"Ashutosh Sagar - Porfolio",
    git:"https://github.com/thecurioussailor/ashutoshsagar",
    live:"https://ashutoshsagar.vercel.app/"
  },
  {
    img: Project4,
    title:"Ashutosh Sagar - Porfolio",
    git:"https://github.com/thecurioussailor/ashutoshsagar",
    live:"https://ashutoshsagar.vercel.app/"
  }
]

function Projects() {
  return (
    <>
        <section id='projects' className='flex flex-col justify-center gap-[1rem] pt-[1vh] mx-[5rem] lg:mx-[10rem] box-border h-fit min-h-[100vh]'>
            <p className='text-center text-slate-500'>Browse My Recent</p>
            <h1 className='text-[3rem] text-center'>Projects</h1>
            <div className='flex justify-center flex-col'>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[2rem] my-[2rem]'>
                  {projects.map(item => (
                    <ProjectItem img={item.img} title={item.title} git={item.git} live={item.live}/>
                  ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Projects;