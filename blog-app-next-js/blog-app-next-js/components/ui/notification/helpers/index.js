export const getNotificationHelper = (requestStatus, requestError) => {
  let notification;

  switch (requestStatus) {
    case 'pending':
      notification = {
        status: 'pending',
        title: 'Sending message...',
        message: 'Your message is on its way!',
      };
      break;
    case 'success':
      notification = {
        status: 'success',
        title: 'Success!',
        message: 'Message sent successfully!',
      };
      break;
    case 'error':
      notification = {
        status: 'error',
        title: 'Error!',
        message: requestError,
      };
      break;
  }

  return notification;
};
