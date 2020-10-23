import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => (
  <form>
    <input
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      type="text"
      placeholder="Type a message"
    />
    <button type="submit" name="submit" onClick={(e) => sendMessage(e)} />
  </form>
);

export default Input;
