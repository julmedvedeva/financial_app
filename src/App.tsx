import { observer } from 'mobx-react-lite';

import PairList from './components/PairsList';
import { Container } from 'react-bootstrap';
import FormBuy from './components/Form';
import 'react-loading-skeleton/dist/skeleton.css';
import Navigate from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import FavouritePairs from './components/FavouritePairs';

function App() {
  return (
    <Router>
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <div>
            <Navigate />
          </div>
          <main>
            <Suspense fallback={<Skeleton count={5} height={30} />}>
              <Routes>
                <Route path="/" element={<PairList />} />
                <Route path="/favourite" element={<FavouritePairs />} />
                <Route path="/form" element={<FormBuy />} />
              </Routes>
            </Suspense>
          </main>
        </Container>
      </Container>
    </Router>
  );
}
export default observer(App);
