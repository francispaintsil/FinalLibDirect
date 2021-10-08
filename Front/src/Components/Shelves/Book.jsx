import { motion } from 'framer-motion'
import React from 'react'

const buttonVariant = {
    tap:{
        backgroundColor: '#E476D1',
        color:'black',
        transition:{
            type:'tween',
            duration: 0.3
        }
    },hover:{
        backgroundColor: 'white',
        color:'black',
        transition:{
            type:'spring',
            duration: 1,
            yoyo:Infinity
        }
    }
}

//represents a book item
const Book = ({title,author,year,category,qty,func}) => {
    return (        
        <motion.div className='book-container'>
            <motion.div className='book'>   
               <label className='qty'>100</label>                  
               <label className='title'>Open Motion</label>                  
               <label className='year'>Year: 1892</label>                  
               <motion.button className ='action'
               onClick = {func}
                variants = {buttonVariant}
                whileTap = 'tap'
                whileHover = 'hover'
               >ADD</motion.button>                              
            </motion.div>
        </motion.div>
    )
}

export default Book
