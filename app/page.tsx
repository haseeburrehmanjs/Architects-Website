import React from 'react'
import Navbar from './component/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import MissionStateMent from './pages/MissionStateMent'
import Project from './pages/Project'
import Contactus from './pages/Contactus'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MissionStateMent />
      <Project />
      <Contactus />
    </>
  )
}

export default page
