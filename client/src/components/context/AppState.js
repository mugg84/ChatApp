import React, { useReducer } from 'react';
import AppContext from './appContext';
import AppReducer from './appReducer';

import { GET_NAME, GET_ROOM, SET_ALERT, REMOVE_ALERT } from '../types';

const AppState = (props) => {
  const initalState = { name: '', room: '', alert: null };

  const [state, dispatch] = useReducer(AppReducer, initalState);

  const setName = (name) => {
    dispatch({ type: GET_NAME, payload: name });
  };

  const setRoom = (room) => {
    dispatch({ type: GET_ROOM, payload: room });
  };

  const setAlert = (error) => {
    dispatch({ type: SET_ALERT, payload: error });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AppContext.Provider
      value={{
        name: state.name,
        room: state.room,
        alert: state.alert,
        setName,
        setRoom,
        setAlert,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
