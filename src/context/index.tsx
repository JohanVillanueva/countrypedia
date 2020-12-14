import React, { createContext } from 'react';
import { ReactDefaultProps } from '../@types';
import useAppState from '../hooks/useAppState.hook';
import { AppState } from '../models';

export const AppContext = createContext<AppState |null>(null);

const AppContextProvider: React.FC<ReactDefaultProps> = ({ children }: ReactDefaultProps) => {
  const state = useAppState();

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
