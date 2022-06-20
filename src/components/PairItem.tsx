import React, { useCallback } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { useRootStore } from '../RootStateContext';

export const PairItem = (pair: any) => {
  const { pairStore } = useRootStore();
  // const fetch = useCallback(() => {
  //   return pairStore.getPair(
  //     ,
  //   );
  // }, []);
  console.log('pairStore', pairStore.pair);

  return (
    <ListGroup>
      <ListGroupItem>{pairStore.pair?.poolAddress}</ListGroupItem>
    </ListGroup>
  );
};
