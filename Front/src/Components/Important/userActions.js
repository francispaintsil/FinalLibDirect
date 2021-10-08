import Axios from "axios";
import { loginError } from './helpers'
import React from 'react';

/**
 * if(!(Object.keys(userData).length === 0 && userData.constructor === Object)){
                                // history.push('/library');
                                const notification = notificationSystem.current;
                                note.level = 'success';
                                notification.addNotification({
                                 title : 'Authenticated!',
                                message : 'You are through, please wait',
                                level : note.level,
                                autoDismiss : note.autoDismiss,
                                });
                             }else{
                                const notification = notificationSystem.current;
                                notification.addNotification({
                                 title : 'Cannot Authenticate!',
                                message : 'Username or password is not correct!',
                                level : note.level,
                                autoDismiss : note.autoDismiss,
                                });
                             } 
 * 
*/