import React, { createContext, useReducer } from 'react';
import counterReducer, { initialState } from './reducer';

export const CounterContext = createContext();

const ContextProvider = props => {
  const [counter, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default ContextProvider;
