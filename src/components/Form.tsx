import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRootStore } from '../RootStateContext';

const FormBuy = (props: any) => {
  const { pairStore } = useRootStore();
  const { pair } = props;
  const postData = useCallback(async () => {
    await pairStore.buyPairs(pair);
  }, []);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{`${pair.base} = > ${pair.counter}`}</Form.Label>
        <Form.Control type="number" placeholder="Enter count" />
      </Form.Group>
      <Button variant="primary" onClick={postData}>
        Buy
      </Button>
    </Form>
  );
};

export default observer(FormBuy);
