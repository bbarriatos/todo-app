import {NotificationContainer, NotificationManager} from 'react-notifications';


const createNotification = (type) => {
    switch (type) {
        case 'info':
          NotificationManager.info('Updated!');
          break;
        case 'success':
          NotificationManager.success('Todo Added!');
          break;
        case 'warning':
          NotificationManager.warning('Removed!', '', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
    }
}

export default createNotification;