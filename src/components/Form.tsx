import { observer } from 'mobx-react-lite';
import { Button, Form } from 'react-bootstrap';
import { useRootStore } from '../RootStateContext';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { useCallback, useEffect } from 'react';

const FormBuy = () => {
  const { pairStore } = useRootStore();
  const { width, height } = useWindowSize();
  const fetchData = useCallback(() => {
    pairStore.loadPairs();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Form>
      <h1>Buying form</h1>
      <Form.Group className="mb-3" controlId="formPair">
        <Form.Label>Checked pair</Form.Label>
        <Form.Select>
          {pairStore.pairs?.map(
            (pair: { counter: string; base: string }, index: number) => {
              return (
                <option key={index}>
                  {pair.base} {pair.counter}
                </option>
              );
            },
          )}
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
