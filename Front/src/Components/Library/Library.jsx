import { motion } from 'framer-motion'
import React from 'react'
import { Controls } from './Control';
import { Content } from './Content';

const containerVariants = {
    hidden:{
      y: '100vw',
      opacity: 0
    },
    visible:{
      y: 0,
      opacity: 1,
      transition :{ 
        type : 'spring'
      }
    },
    exit:{
      x: '-100vw',
      transition:{
        ease: 'easeInOut'
      }
    }
  }

const Library = () => {
    return (
        <motion.div className = 'library'
            variants = {containerVariants}
            initial = 'hidden'
            animate = 'visible'
        >            
            {/* <Controls />top */}
            <Content />{/*bottom*/}
        </motion.div>
    )
}
export default Library
