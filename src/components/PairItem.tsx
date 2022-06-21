import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect } from 'react';
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
    </ListGroup>
  );
};

export default observer(PairItem);
