import { motion } from 'framer-motion'
import React from 'react'

const buttonVariant = {
    hover:{
        transition:{
            type:'tween',
            duration: 1
        }
    }
}


const ButtonWrapper = (props) => {
    return (
        <motion.div className ='ButtonWrapper'
        variants = {buttonVariant}
        initial = 'initial'
        animate = 'animate'
        whileHover = 'hover'
        style ={{...props.style}}
        >
            {props.children}
        </motion.div>
    )
}

export default ButtonWrapper
