import { observer } from 'mobx-react-lite';
import React, { useCallback, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRootStore } from '../RootStateContext';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const FormBuy = (props: any) => {
  const { pairStore } = useRootStore();
  const { width, height } = useWindowSize();

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formPair">
        <Form.Label>Checked pair</Form.Label>
        <Form.Select>
          {pairStore.pairs?.map((pair) => {
            return (
              <option>
                {pair.base} {pair.counter}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCount">
        <Form.Control type="number" placeholder="Enter count" />
      </Form.Group>
      <Button
        variant="primary"
        onClick={() => {
          pairStore.buyPairs();
        }}>
        Buy
      </Button>

      {pairStore.state === 'success' && (
        <Confetti
          width={width}
          height={height}
          tweenDuration={10}
          recycle={false}
        />
      )}
    </Form>
  );
};

export default observer(FormBuy);
