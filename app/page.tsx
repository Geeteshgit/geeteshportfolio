import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Education from './components/Education'
import SmoothScroll from './components/SmoothScrolling'
import SectionDivider from './components/SectionDivider'
import CustomCursor from './components/CustomCursor'


const Portfolio = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <Home />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Footer />
      <SmoothScroll />
    </>
  )
}

export default Portfolio 