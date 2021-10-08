import React,{useState} from 'react'
import {motion} from 'framer-motion'
import InputBox from '../Input/InputBox'
import Group from './Group'
import axios from 'axios'

const variant = {
    initial:{},
    animate:{},
    tap:{}
}

const View = () => {
    const [title, setTitle] = useState('');
    const [student, setStudent] = useState('');
    const style = {
        height:'70%',
        width:'25%',
        // backgroundColor:'#fff',
        borderBottom:'none'
    }
    const inputStyle = {        
        textAlign:'left',
    }
    return (
        <motion.div className='library-view'
            variants = {variant}
        >
            <motion.div className='top'>
                <InputBox title = 'Search Book' 
                        style ={style}
                        data = {title}
                        change = {e => setTitle(e.target.value)}
                        iStyle = {inputStyle}
                    />  
                <InputBox title = 'Search Student' 
                        style ={style}
                        data = {student}
                        change = {e => setStudent(e.target.value)}
                        iStyle = {inputStyle}
                    />  
            </motion.div>
            <motion.div className='main'>
                {/* <Group cat= 'Science'> 
                </Group>               */}
                {async()=>{
                    const data = await loadData();
                    console.log(data)
                }}
            </motion.div>
            <motion.div className = 'bottom'>
                 <motion.button className='counter'>
                    View List {0}                    
                </motion.button>
            </motion.div>
        </motion.div>
    )
}

const loadData = async () =>{
    try {
        const rows = await axios.get('http://localhost:5000/user/loadBooks');
        return rows;
        console.log(rows);
    } catch (error) {
        console.log(error)
    }
}

export default View
