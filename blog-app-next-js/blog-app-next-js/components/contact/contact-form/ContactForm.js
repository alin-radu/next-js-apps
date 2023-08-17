import { useState, useRef, useEffect } from 'react';
import { sendContactDataAPI } from '../../../api';
import { getNotificationHelper } from '../../ui/notification/helpers';

import Notification from '../../ui/notification/Notification';

import classes from './ContactForm.module.css';

function ContactForm() {
  const [requestStatus, setRequestStatus] = useState(); // 'pending','success','error'
  const [requestError, setRequestError] = useState(); //

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        emailInputRef.current.value = '';
        nameInputRef.current.value = '';
        messageInputRef.current.value = '';
        setRequestStatus(null);
        setRequestError(null);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    const formData = {
      email: emailInputRef.current.value,
      name: nameInputRef.current.value,
      message: messageInputRef.current.value,
    };

    setRequestStatus('pending');

    try {
      await sendContactDataAPI(formData);

      setRequestStatus('success');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notification = getNotificationHelper(requestStatus, requestError);

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} required />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" ref={messageInputRef} rows="5" />
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
