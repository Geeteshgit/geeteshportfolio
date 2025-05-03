import React from 'react'
import { Technology } from '@/data/techStack'
import { motion } from 'motion/react'

const cardVariants = {
  scaleup: {
    scale: 1.25,
    transition: {
      duration: 0.2
    }
  }
}

const TechnologyCard = ({ technology, icon }: Technology) => {
  return (
    <motion.div 
    whileHover='scaleup'
    className='flex items-center gap-2 sm:text-lg text-sm bg-neutral-900 sm:px-5 px-3 py-1 border border-neutral-700 rounded-xl shadow-lg shadow-purple-500/10'>
        <motion.img 
            src={`/icons/${icon}`} 
            alt="technology-icon"     
            className='sm:h-5 h-4'
            variants={cardVariants}
        />
        <h3 className='opacity-90'>
            {technology}
        </h3>
    </motion.div>
  )
}

export default TechnologyCard