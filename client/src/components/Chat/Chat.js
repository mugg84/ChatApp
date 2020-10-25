import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/appContext';

import styles from './Chat.module.scss';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const appContext = useContext(AppContext);

  const { name, setName, room, setAlert } = appContext;

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        setName('');
        setAlert({ error });
      }
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
    // eslint-disable-next-line
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

  return !name || !room ? (
    <Redirect to="/" />
  ) : (
    <section className={styles.chat}>
      <InfoBar />
      <Messages messages={messages} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </section>
  );
};

export default Chat;
