import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useState } from 'react'
import Button from '../Input/Button'
import ButtonWrapper from '../Input/ButtonWrapper'
import InputBox from '../Input/InputBox'
import NotificationSystem from 'react-notification-system';

//itle, the author, year of publication ,the category
// under which it falls and the quantity
export const BookModifier = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');

    const notificator = useRef('')

    const BtnStyle = {
        height:'10%',
        marginTop:'15px',
        width: '80%',
    }

    const clear = () =>{   
        setTitle('')
        setAuthor('')
        setYear('')
        setCategory('')
        setQuantity('')
    }
    const send = () =>{
        axios.post('http://localhost:5000/user/createbook',
        {title,author,year,category,quantity})
        .then(data =>{
          if(data.status === 201){
              const notice = notificator.current;
              notice.addNotification({
                title : 'Done',
                message : 'Book created successfully',
                level : "success",
                autoDismiss : 10,
              });
          }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <motion.div className = 'bookModifier-wrapper'>
            <motion.div className='bookModifier'>                
            <h1
                style={{color:'white'}}
            >Create Book</h1>
                <InputBox title = 'Title' 
                    style ={BtnStyle}
                    data = {title}
                    change = {e => setTitle(e.target.value)}
                 />    
                <InputBox title = 'Author' 
                    style ={BtnStyle} 
                    data = {author}
                    change = {e => setAuthor(e.target.value)}
                /> 
                <InputBox title = 'Year' 
                    style ={BtnStyle} 
                    data = {year}
                    change = {e => setYear(e.target.value)}
                />   
                <InputBox title = 'Category' 
                    style ={BtnStyle} 
                    data = {category}
                    change = {e => setCategory(e.target.value)}/> 
                <InputBox title = 'Quanity' 
                    style ={BtnStyle} 
                    data = {quantity}
                    change = {e => setQuantity(e.target.value)}
                />   
                <ButtonWrapper style={{
                    width: '80%',
                    height: '20%',
                    marginTop: '20px'
                }}>
                    <Button text='Clear' 
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        btnStyle={{
                            border:'1px solid #E476D1'
                        }}   
                        click ={clear}                  
                    />
                    <Button text='Create' 
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                        btnStyle={{
                            border:'1px solid #E476D1'
                        }}   
                        click ={send}                   
                    />
                </ButtonWrapper>
                <NotificationSystem ref = {notificator}/>
            </motion.div>
        </motion.div>
    )
}
