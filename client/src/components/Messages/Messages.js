import React, { useContext } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import AppContext from '../context/appContext';
import Message from '../Message/Message';

import styles from './Messages.module.scss';

const Messages = ({ messages }) => {
  const appContext = useContext(AppContext);

  const { name } = appContext;

  return (
    <ScrollToBottom className={styles.container}>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
