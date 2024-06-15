import React from 'react'
import ProjectItem from './ProjectItem';
import Project1 from "../assets/project-1.png"

const projects = [
  {
    img: Project1,
    title:"Swarna",
    git:"https://github.com/thecurioussailor/swarna",
    live:"https://swarna.vercel.app/"
  },
  {
    img: Project1,
    title:"Swarna",
    git:"https://github.com/thecurioussailor/swarna",
    live:"https://swarna.vercel.app/"
  },
  {
    img: Project1,
    title:"Swarna",
    git:"https://github.com/thecurioussailor/swarna",
    live:"https://swarna.vercel.app/"
  }
]

function Projects() {
  return (
    <>
        <section id='projects' className='flex flex-col justify-center gap-[1rem] pt-[1vh] mx-[10rem] box-border h-fit min-h-[100vh]'>
            <p className='text-center text-slate-500'>Browse My Recent</p>
            <h1 className='text-[3rem] text-center'>Projects</h1>
            <div className='flex justify-center flex-col'>
                <div className='grid grid-cols-3 gap-[2rem] my-[2rem]'>
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