import React, { createContext, useReducer } from 'react';
import postReducer, { initialState } from './reducer';

export const PostContext = createContext();

const ContextProvider = props => {
  const [post, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ post, dispatch }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default ContextProvider;
