import React, { useCallback, useEffect } from 'react';
import { useRootStore } from '../RootStateContext';
import { observer } from 'mobx-react-lite';
import { Accordion } from 'react-bootstrap';

const FavouritePairs = () => {
  const { pairStore } = useRootStore();

  useEffect(() => {
    pairStore.gettingToFavourite();
  }, []);

  return (
    <Accordion>
      <h1>Favourite pairs</h1>
      {pairStore.favouritePairs?.map((pair: any, index: number) => {
        return (
          <Accordion.Item eventKey={index.toString()}>
            <div
              style={{
                display: 'flex ',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Accordion.Header>
                {`${pair.base} => ${pair.counter}`}
              </Accordion.Header>
            </div>

            <Accordion.Body>
              <div>{`base: ${pair.base}`}</div>
              <div>{`baseAddress: ${pair.baseAddress}`}</div>
              <div>{`counter: ${pair.counter}`}</div>
              <div>{`counterAddress: ${pair.counterAddress}`}</div>
              <div>{`fee: ${pair.fee}`}</div>
              <div>{`lpAddress: ${pair.lpAddress}`}</div>
              <div>{`poolAddress: ${pair.poolAddress}`}</div>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default observer(FavouritePairs);
