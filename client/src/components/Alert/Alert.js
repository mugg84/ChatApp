import React, { useContext } from 'react';

import AppContext from '../context/appContext';

import styles from './Alert.module.scss';

const Alert = () => {
  const appContext = useContext(AppContext);

  const { alert } = appContext;

  return <p className={styles.alert}>{alert ? alert.error : ''}</p>;
};

export default Alert;
