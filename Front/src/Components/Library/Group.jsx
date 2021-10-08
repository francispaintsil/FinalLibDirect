import { motion } from 'framer-motion'
import React from 'react'

const Group = (props) => {
    return (
        <motion.div className='group'

        >
            <motion.div className='top'>
                <h4>{props.cat}</h4>
            </motion.div>
            <motion.div className='redetail'>
                {props.children}                  
            </motion.div>
        </motion.div>
    )
}

export default Group
