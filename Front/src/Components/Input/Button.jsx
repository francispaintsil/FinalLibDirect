import { motion } from 'framer-motion';
import React from 'react';

const buttonVariant ={
    tap:{
        backgroundColor: 'white',
        color:'black',
        transition:{
            type:'tween',
            duration: 0.3
        }
    },hover:{
        borderLeft: '2px solid #E476D1',
        borderBottom: '2px solid #E476D1',
        textShadow: '0px 0px 8px white',
        boxShadow: '0px 0px 8px white',
        color:'white',
        y:-5,
        transition:{
            duration: 0.3,
            type:'spring',
            stiffness: 3000,
            ease: 'easeInOut'
        }
    }

}

const Button = ({text,style,btnStyle,click}) => {
    return (
        <div style={{...style}}>
            <motion.button                
               variants = {buttonVariant}
               whileTap = 'tap'
               whileHover='hover'              
               style ={{...btnStyle}}
               onClick = {click}>            
                {text}
            </motion.button>
        </div>
        
    )
}

export default Button
