import { motion } from 'framer-motion'
import React from 'react'

const buttonVariant ={
    initial:{
        rotate: '0deg',
        backgroud:'rgb(36, 35, 35)'
    },animate:{
        rotate: '10deg',
        transition:{
            duration:0.2,
            yoyo: 1
        }
    },
    hover:{
        borderLeft: '2px solid #E476D1',
        borderBottom: '2px solid #E476D1',
        textShadow: '0px 0px 8px white',
        boxShadow: '0px 0px 4px white',
        y:-4,
        transition:{
            duration: 0.3,
            type:'spring',
            stiffness: 3000,
            ease: 'easeInOut'
        }
    },
    tap:{
        y:1,
        backgroudColor:'linearGradient(rgb(36, 35, 35),#E476D1)'
    }
}

const LibraryToolbox = () => {
    return (
        <motion.div className='library-toolbox'
         drag
         dragConstraints={{
             left:0,
             right:100,
             top:0,
             bottom:100
         }}
        >
            <div>
                <motion.button onClick={()=>{
                    
                }}
                    variants = {buttonVariant}    
                    animate ='animate'    
                    whileHover = 'hover'   
                    whileTap = 'tap'         
                >
                    Create Book
                </motion.button>
                <motion.button onClick={()=>{}}
                    variants = {buttonVariant}     
                    animate ='animate'    
                    whileHover = 'hover'  
                    whileTap = 'tap'             
                >
                    Open Shelves
                </motion.button>
                <motion.button onClick={()=>{}}
                    variants = {buttonVariant}     
                    animate ='animate'    
                    whileHover = 'hover'  
                    whileTap = 'tap'             
                >
                    View History
                </motion.button>
            </div>
        </motion.div>
    )
}

export default LibraryToolbox
