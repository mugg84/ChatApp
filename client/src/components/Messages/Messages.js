import React, { useContext } from 'react';

import AppContext from '../context/appContext';

import ScrollBar from '../ScrollBar/ScrollBar';
import Message from '../Message/Message';

const Messages = ({ messages }) => {
  const appContext = useContext(AppContext);

  const { name } = appContext;

  return (
    <ScrollBar>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollBar>
  );
};

export default Messages;
