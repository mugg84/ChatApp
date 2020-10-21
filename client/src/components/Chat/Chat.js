import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

import AppContext from '../context/appContext';

import './Chat.module.scss';

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
      setMessages(...messages, message);
    });
  }, [messages]);

  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
