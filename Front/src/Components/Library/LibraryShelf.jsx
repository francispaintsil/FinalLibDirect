import { motion } from 'framer-motion'
import React from 'react'
import { BookModifier } from './BookModifier'
import View from './View'

const LibraryShelf = () => {
    return (
        <motion.div className='library-shelf'>
            {/* <BookModifier/> */}
            <View/>
        </motion.div>
    )
}

export default LibraryShelf
