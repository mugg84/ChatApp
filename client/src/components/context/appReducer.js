import { GET_NAME, GET_ROOM, SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_NAME:
      return { ...state, name: action.payload };
    case GET_ROOM:
      return { ...state, room: action.payload };
    case SET_ALERT:
      return { ...state, alert: action.payload };
    case REMOVE_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
