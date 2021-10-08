import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import Button from './Input/Button'
import ButtonWrapper from './Input/ButtonWrapper'
import InputBox from './Input/InputBox';
import NotificationSystem from 'react-notification-system';
// import { doLogin } from './Important/userActions';
// import { addUserData } from '../Redux/Slices/userDataSlice';
// import { useDispatch } from 'react-redux';
import {  useHistory } from 'react-router';
import axios from 'axios';

const loginVariant = {
    initial:{
        y: -500,
    },animate:{
        y:0,
        transition:{
            duration: [1,2],
            type:'spring',
            stiffness: 90,
            dampness: 70
        }
    }
}

const Login = () => {
    const notificationSystem = useRef();
    // const dispatch = useDispatch();
    const history = useHistory();
        const note ={
         title: 'Empty',
          message: 'Check and enter username and password',
          level: 'warning',
          autoDismiss: 10
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [userData, setuserData] = useState({})

     return (            
        <motion.div className='login'
            variants = {loginVariant}
            initial = 'initial'
            animate ='animate'
        >
            <motion.div className='login-bar'>
              <p>Library</p>
              <p> Booking System</p>
            </motion.div>
            <motion.div className='login-content'>
                <section>                    
                    <InputBox title = 'Username' type = 'text'
                        data = {username}    
                        change = {e => setUsername(e.target.value)}
                    />
                    <InputBox title = 'Password' type = 'password' 
                        data = {password}
                        change = {e => setPassword(e.target.value)}
                        style = {{marginTop: '20px'}}/>
                    <ButtonWrapper style={{marginTop:'70px'}}>
                     <Button text='Clear' click={()=>{                         
                            const notification = notificationSystem.current;
                            notification.addNotification({
                             title : 'Done',
                            message : 'Input cleared',
                            level : note.level,
                            autoDismiss : note.autoDismiss,
                            });
                     }}/>
                     <Button text='Login' 
                        click={ async ()=>{
                            const {data} = await Dol(username,password);
                            console.log(data);
                            // console.log({data});
                            if(data.length !== 0){
                                const notification = notificationSystem.current;
                                note.level = 'success';
                                notification.addNotification({
                                 title : 'Authenticated!',
                                message : 'You are through, please wait',
                                level : note.level,
                                autoDismiss : note.autoDismiss,
                                });
                                setTimeout(() => {
                                    history.push('/library');
                                }, 1000);
                             }else{
                                const notification = notificationSystem.current;
                                notification.addNotification({
                                 title : 'Cannot Authenticate!',
                                message : 'Username or password is not correct!',
                                level : note.level,
                                autoDismiss : note.autoDismiss,
                                });
                             } 
                        }}                        
                    />  
                    <NotificationSystem ref={notificationSystem} />
                    </ButtonWrapper>
                </section>
            </motion.div>
        </motion.div>
    )
}

const Dol = async (username,password) =>{
    try {
        const rows = await axios.get(`http://localhost:5000/user/login/?username=${username}&password=${password}`)
        return rows;
    } catch (error) {
        console.log(error)
    }
}

export default Login;