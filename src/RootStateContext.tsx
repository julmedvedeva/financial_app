import React from 'react';
import { PairStore } from './PairStore';

type RootStateContextValue = {
  pairStore: PairStore;
};

const RootStateContext = React.createContext<RootStateContextValue>(
  {} as RootStateContextValue,
);

const pairStore = new PairStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <RootStateContext.Provider value={{ pairStore }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootStore = () => React.useContext(RootStateContext);
