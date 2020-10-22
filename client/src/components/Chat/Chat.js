import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import AppContext from '../context/appContext';

import styles from './Chat.module.scss';

import InfoBar from '../InfoBar/InfoBar';

let socket;

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const appContext = useContext(AppContext);

  const { name, room } = appContext;

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [ENDPOINT, name, room]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log(message, messages);

  return (
    <section className={styles.chat}>
      {/*  <input
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
    />; */}
      <InfoBar />
    </section>
  );
};

export default Chat;
