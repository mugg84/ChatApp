import React, { useContext } from 'react';
import AppContext from '../context/appContext';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import styles from './InfoBar.module.scss';

const InfoBar = () => {
  const appContext = useContext(AppContext);

  const { room } = appContext;

  return (
    <article className={styles.infoBar}>
      <section className={styles.infoBar__left}>
        <img className={styles.img} src={onlineIcon} alt="online" />
        <h3 className={styles.room}>Room {room}</h3>
      </section>
      <section className={styles.infoBar__right}>
        <a href="/">
          <img className={styles.img} src={closeIcon} alt="close chat" />
        </a>
      </section>
    </article>
  );
};

export default InfoBar;
