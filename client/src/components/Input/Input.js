import React from 'react';

import styles from './Input.module.scss';

const Input = ({ message, setMessage, sendMessage }) => (
  <form className={styles.form}>
    <input
      className={styles.form__input}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      type="text"
      placeholder="Type a message"
    />
    <button
      className={`${styles.btn} ${styles['btn--send']}`}
      type="submit"
      name="submit"
      onClick={(e) => sendMessage(e)}
    >
      Send
    </button>
  </form>
);

export default Input;
