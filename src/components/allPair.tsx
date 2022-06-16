import React, { Component, useCallback, useEffect } from 'react';
// import { getPair } from './../service/service';
import { PairStore } from '../PairStore';
import { useRootStore } from '../RootStateContext';
import { observer, useObserver } from 'mobx-react-lite';

const PairList = () => {
  const { pairStore } = useRootStore();
  const fetchData = useCallback(async () => {
    await pairStore.loadPairs();
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <ul>
        {pairStore.pairs?.map((pair: any) => {
          console.log('in map', pair);
          return (
            <li key={Math.random()}>
              {pair.base} {pair.counter}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default observer(PairList);
