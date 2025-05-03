'use client'

import React from 'react'
import { motion, useScroll } from 'motion/react'

const Projects = () => {
  return (
    <section id='projects'className='black-background min-h-screen flex flex-col items-center gap-15 pt-[100px] pb-20 lg:px-44 sm:px-28 px-4'>
      <motion.h1 
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          className='sm:text-5xl text-4xl text-center font-bold bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-purple-200 z-20'
          >
          MY PROJECTS
        </motion.h1>
        <motion.div className='h-screen'>
          <div>
            
          </div>
          <div>

          </div>
        </motion.div>
    </section>
  )
}

export default Projects