import { motion } from 'framer-motion'
import React from 'react'
import Book from './Book'

const Shelf = () => {
    return (
        <motion.div className='shelf'>
            <Book/>
        </motion.div>
    )
}

export default Shelf
