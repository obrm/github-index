import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set alert
  const setAlert = (message, type, sec = 2) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), sec * 1000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
