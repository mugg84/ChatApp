import React from 'react';

import styles from './Message.module.scss';

const Message = ({ message: { user, text }, name }) => {
  let isSentBycurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentBycurrentUser = true;
  }

  return (
    <div className={styles.message}>
      {isSentBycurrentUser ? (
        <div className={styles.message__client}>
          <p className={styles.client__user}>{trimmedName}</p>
          <p className={styles.client__text}>{text}</p>
        </div>
      ) : (
        <div className={styles.message__other}>
          <p className={styles.other__text}>{text}</p>
          <p className={styles.other__user}>{user}</p>
        </div>
      )}
    </div>
  );
};

export default Message;
