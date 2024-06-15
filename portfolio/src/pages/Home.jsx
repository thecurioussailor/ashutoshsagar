import React from 'react'
import Profile from '../components/Profile'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

function Home() {
  return (
    <div>
        <Profile/>
        <About/>
        <Experience/>
        <Projects/>
    </div>
  )
}

export default Home