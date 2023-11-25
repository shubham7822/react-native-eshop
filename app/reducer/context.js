import React, { createContext, useReducer } from 'react';
import { cartReducer ,initialState} from './reducer';

export const cartContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

