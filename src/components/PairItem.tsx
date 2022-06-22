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
    <>
      <h1>Details</h1>
      <ListGroup>
        <ListGroupItem>
          total amount of fees (in USD) in the last 7 days:{' '}
          {pairStore.pairLong?.fee7d}
        </ListGroupItem>
        <ListGroupItem>
          total amount of fees (in USD) in the last 24h:{' '}
          {pairStore.pairLong?.fee24h}
        </ListGroupItem>
        <ListGroupItem>
          total amount of fees (in USD) EVER: {pairStore.pairLong?.feeAllTime}
        </ListGroupItem>
        <ListGroupItem>
          tvl of the left pair (token) in USD: {pairStore.pairLong?.leftLocked}
        </ListGroupItem>
        <ListGroupItem>
          price (in USD) of the left pair: {pairStore.pairLong?.leftPrice}
        </ListGroupItem>
        <ListGroupItem>
          left token name: {pairStore.pairLong?.meta.base}
        </ListGroupItem>
        <ListGroupItem>
          left token name: {pairStore.pairLong?.meta.baseAddress}
        </ListGroupItem>
        <ListGroupItem>
          right token name (ie. BRIDGE): {pairStore.pairLong?.meta.counter}
        </ListGroupItem>
        <ListGroupItem>
          root address of the right token:{' '}
          {pairStore.pairLong?.meta.counterAddress}
        </ListGroupItem>
        <ListGroupItem>
          fees for trading between left and right token:{' '}
          {pairStore.pairLong?.meta.fee}
        </ListGroupItem>
        <ListGroupItem>
          address of the pool of left and right pair:{' '}
          {pairStore.pairLong?.meta.poolAddress}
        </ListGroupItem>
        <ListGroupItem>
          tvl of the right pair (token) in USD:{' '}
          {pairStore.pairLong?.rightLocked}
        </ListGroupItem>
        <ListGroupItem>
          price (in USD) of the left pair: {pairStore.pairLong?.rightPrice}
        </ListGroupItem>
        <ListGroupItem>
          TVL in the pair’s pool: {pairStore.pairLong?.tvl}
        </ListGroupItem>
        <ListGroupItem>
          TVL change (percentage) in the pool for the last 24h:{' '}
          {pairStore.pairLong?.tvlChange}
        </ListGroupItem>
        <ListGroupItem>
          trading volume of the pair in the last 7 days (in USD):{' '}
          {pairStore.pairLong?.volume7d}
        </ListGroupItem>
        <ListGroupItem>
          trading volume of the pair in the last 24h (in USD):{' '}
          {pairStore.pairLong?.volume24h}
        </ListGroupItem>
        <ListGroupItem>
          trading volume change (percentage) in the last 24h:{' '}
          {pairStore.pairLong?.volumeChange24h}
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

export default observer(PairItem);
