import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRootStore } from '../RootStateContext';

const FormBuy = (props: any) => {
  const { pairStore } = useRootStore();
  // const { pair } = props;
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
      <Button variant="primary" onClick={pairStore.buyPairs}>
        Buy
      </Button>
    </Form>
  );
};

export default observer(FormBuy);
