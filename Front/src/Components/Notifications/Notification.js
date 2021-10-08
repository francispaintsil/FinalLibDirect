import NotificationSystem from 'react-notification-system';
export const MakeNotice = ({ref,title,message,audit,timeout}) => {
    const notification = ref.current;
     notification.addNotification({
      title: title,
      message: message,
      level: audit,
      autoDismiss: timeout
    });
    <NotificationSystem ref={notification} />
  };
  
  
//   title: 'Empty',
  //       message: 'Check and enter username and password',
  //       level: 'warning',
  //       autoDismiss: 10