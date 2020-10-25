import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/appContext';
import Alert from '../Alert/Alert';

import styles from './Join.module.scss';

const Join = () => {
  const appContext = useContext(AppContext);

  const { name, room, setName, setRoom, setAlert } = appContext;

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'room') {
      setRoom(e.target.value);
    }
  };

  const handleLink = (e) => {
    if (!name || !room) {
      e.preventDefault();
      setAlert({ error: 'Please fill all the inputs' });
    }
  };

  const onKeyPress = (e) => {
    console.log('d');
  };

  return (
    <section className={styles.main}>
      <h1 className={styles.main__title}>Join</h1>
      <form className={styles.form}>
        <label className={styles.form__label}>Name</label>
        <input
          className={styles.form__input}
          name="name"
          data-testid="name"
          type="text"
          onChange={handleChange}
        />
        <label className={styles.form__label}>Room</label>
        <input
          className={styles.form__input}
          name="room"
          data-testid="room"
          type="text"
          onChange={handleChange}
        />
      </form>

      <div className={styles.alert}>
        <Alert />
      </div>

      <Link
        onKeyPress={onKeyPress}
        onClick={handleLink}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button
          className={`${styles.btn} ${styles['btn--submit']}`}
          type="submit"
          data-testid="submit"
        >
          Sign In
        </button>
      </Link>
    </section>
  );
};

export default Join;
