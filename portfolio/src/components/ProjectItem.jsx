import React from 'react'
import Project1 from "../assets/project-1.png"
function ProjectItem({img, title, git, live}) {
  return (
    <div className='p-[1.5rem] flex-1 border-2 rounded-[2rem] border-solid border-zinc-400'>
        <div className='flex flex-wrap flex-row gap-[2.5rem] justify-around'>
            <img className='rounded-[2rem] w-[90%] h-[90%]' src={img}/>
        </div>
        <h2 className='m-[1rem] font-semibold text-[1.75rem] text-center'>{title}</h2>
        <div className='flex justify-center gap-[1rem]'>
            <button className='text-black font-semibold transition-all duration-300 ease-in-out border-2 rounded-[2rem] p-[1rem] w-[8rem] border-zinc-400 hover:border-black hover:bg-black hover:text-white'><a href={git} target='_blank'>Github</a></button>
            <button className='text-black font-semibold transition-all duration-300 ease-in-out border-2 rounded-[2rem] p-[1rem] w-[8rem] border-zinc-400 hover:border-black hover:bg-black hover:text-white'><a href={live} target='_blank'>Live Demo</a></button>
        </div>
    </div>
  )
}

export default ProjectItem