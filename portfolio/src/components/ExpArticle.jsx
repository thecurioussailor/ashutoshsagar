import React from 'react'

function ExpArticle({skill, level, img}) {
  return (
    <>
        <article className='flex w-[10rem] gap-[0.5rem]'>
            <img className='h-10 w-10' src={img}/>
            <div>
                <h3 className='font-semibold'>{skill}</h3>
                <p>{level}</p>
            </div>
        </article>
    </>
  )
}

export default ExpArticle