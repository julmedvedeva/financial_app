import { observer } from 'mobx-react-lite';

import PairList from './components/allPair';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <PairList />
      </Container>
    </Container>
  );
}
export default observer(App);
