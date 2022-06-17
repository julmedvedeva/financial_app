import React, { useCallback, useEffect } from 'react';
import { useRootStore } from '../RootStateContext';
import { observer } from 'mobx-react-lite';
import { Accordion } from 'react-bootstrap';


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
      <Accordion>
        {pairStore.pairs?.map((pair: any, index: number) => {
          return (
            <Accordion.Item eventKey={index.toString()}>
              <Accordion.Header>
                {`${pair.base} => ${pair.counter}`}
              </Accordion.Header>
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
    </>
  );
};

export default observer(PairList);
