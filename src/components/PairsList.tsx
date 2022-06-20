import React, {
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
} from 'react';
import { useRootStore } from '../RootStateContext';
import { observer } from 'mobx-react-lite';
import { Accordion, Button } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const PairList = () => {
  const { pairStore } = useRootStore();
  const fetchData = useCallback(() => {
    pairStore.loadPairs();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {pairStore.isLoading ? (
        <Skeleton count={5} height={30} />
      ) : (
        <Accordion>
          <h1>All Pair</h1>
          {pairStore.pairs?.map((pair: any, index: number) => {
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
                  <div>
                    <Button
                      data-id={index}
                      onClick={() => pairStore.addToFavourite(pair)}>
                      Favourite
                    </Button>
                  </div>
                </div>

                <Accordion.Body>
                  <div>{`base: ${pair.base}`}</div>
                  <div>{`baseAddress: ${pair.baseAddress}`}</div>
                  <div>{`counter: ${pair.counter}`}</div>
                  <div>{`counterAddress: ${pair.counterAddress}`}</div>
                  <div>{`fee: ${pair.fee}`}</div>
                  <div>{`lpAddress: ${pair.lpAddress}`}</div>
                  <div>{`poolAddress: ${pair.poolAddress}`}</div>
                  <Link to={`/pair/${pair.poolAddress}`}>
                    <Button
                      onClick={() => {
                        pairStore.getPair(pair?.poolAddress);
                      }}>
                      More info
                    </Button>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      )}
    </>
  );
};

export default observer(PairList);
