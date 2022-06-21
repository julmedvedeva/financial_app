import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { useRootStore } from '../RootStateContext';

const PairItem = (props: any) => {
  const { pairStore } = useRootStore();

  useEffect(() => {
    pairStore.getPair(pairStore.pairShort.poolAddress);
  }, []);

  return (
    <ListGroup>
      <ListGroupItem>{pairStore.pairLong?.fee7d}</ListGroupItem>
      <ListGroupItem>{pairStore.pairLong?.fee24h}</ListGroupItem>
      <ListGroupItem>{pairStore.pairLong?.leftLocked}</ListGroupItem>
      <ListGroupItem>{pairStore.pairLong?.meta.base}</ListGroupItem>
      <ListGroupItem>{pairStore.pairLong?.meta.counter}</ListGroupItem>
    </ListGroup>
  );
};

export default observer(PairItem);
