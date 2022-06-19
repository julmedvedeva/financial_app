import React, { useCallback, useEffect } from 'react';
import { useRootStore } from '../RootStateContext';
import { observer } from 'mobx-react-lite';

const FavouritePairs = () => {
  const { pairStore } = useRootStore();

  useEffect(() => {
    pairStore.gettingToFavourite();
    console.log();
  }, []);
  return <h1>wiil be favourite</h1>;
};

export default observer(FavouritePairs);
