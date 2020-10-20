import React, { useContext, useEffect } from 'react';
import io from 'socket.io-client';

import AppContext from '../context/appContext';

import './Chat.module.scss';

let socket;

const Chat = () => {
  const appContext = useContext(AppContext);

  const { name, room } = appContext;

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    socket = io(ENDPOINT);

    socket.emit('join', { name, room });
  }, [ENDPOINT, name, room]);
  return <h1>Chat</h1>;
};

export default Chat;
