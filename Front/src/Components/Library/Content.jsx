import { motion } from 'framer-motion'
import React from 'react'
import LibraryShelf from './LibraryShelf'
import LibraryToolbox from './LibraryToolbox'

export const Content = () => {
    return (
        <motion.div className='library-content'>
            <LibraryToolbox/>
            <LibraryShelf/>
        </motion.div>
    )
}
