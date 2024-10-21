import React from 'react'
import Navbar from './component/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import MissionStateMent from './pages/MissionStateMent'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MissionStateMent />
    </>
  )
}

export default page
