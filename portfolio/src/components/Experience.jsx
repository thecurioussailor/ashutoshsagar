import React from 'react'
import ExpArticle from './ExpArticle'
import VerifiedIcon from "../assets/checkmark.png"

const fskills = [
    {
        skill: "Next.js",
        level: "Experienced"
    },
    {
        skill: "Typescript",
        level: "Experienced"
    },
    {
        skill: "React.js",
        level: "Experienced"
    },
    {
        skill: "Javascript",
        level: "Experienced"
    },
    {
        skill: "TailwindCSS",
        level: "Experienced"
    },
    {
        skill: "SASS",
        level: "Experienced"
    }
]

const bskills = [
    {
        skill: "Node.js",
        level: "Experienced"
    },
    {
        skill: "Express.js",
        level: "Experienced"
    },
    {
        skill: "MongoDB",
        level: "Experienced"
    },
    {
        skill: "PostgreSQL",
        level: "Experienced"
    },
    {
        skill: "Prisma ORM",
        level: "Experienced"
    },
    {
        skill: "JWT Tokens",
        level: "Experienced"
    }
]

function Experience() {
  return (
    <div>
        <section id='experience' className='flex flex-col justify-center gap-[1rem] pt-[1vh] mx-[5rem] lg:mx-[10rem] box-border h-fit min-h-[100vh]'>
            <p className='text-center text-slate-500'>Explore My</p>
            <h1 className='text-5xl text-center'>Experience</h1>
            <div className='flex flex-col justify-center'>
                <div className='flex flex-col lg:flex-row my-[2rem] gap-[2rem]'>
                    <div className='p-[1.5rem] flex-1 bg-white border-2 border-solid rounded-[2rem] border-zinc-400'>
                        <h2 className='font-semibold mb-[2rem] text-[1.5rem] text-slate-700 text-center'>Frontend Development</h2>
                        <div className='flex flex-row justify-around gap-[2.5rem] text-initial flex-wrap'>
                            {fskills.map(item => (
                                <ExpArticle skill={item.skill} img={VerifiedIcon} level={item.level}/>
                            ))}
                        </div>
                    </div>
                    <div className='p-[1.5rem] flex-1 bg-white border-2 border-solid rounded-[2rem] border-zinc-400'>
                        <h2 className='font-semibold mb-[2rem] text-[1.5rem] text-slate-700 text-center'>Backend Development</h2>
                        <div className='flex flex-row justify-around gap-[2.5rem] text-initial flex-wrap'>
                            {bskills.map(item => (
                                <ExpArticle skill={item.skill} img={VerifiedIcon} level={item.level}/>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Experience