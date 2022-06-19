import { observer } from 'mobx-react-lite';

import PairList from './components/PairsList';
import { Container } from 'react-bootstrap';
import FormBuy from './components/Form';
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <div className="row">
          <div className="col-8">
            <PairList />
          </div>
          <div className="col-4">
            <FormBuy />
          </div>
        </div>
      </Container>
    </Container>
  );
}
export default observer(App);
