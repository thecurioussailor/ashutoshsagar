import React from 'react'
import Profile from '../components/Profile'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Profile/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home