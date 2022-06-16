import React, { useCallback, useEffect } from 'react';
import './App.css';
import { observer, useObserver } from 'mobx-react-lite';

import PairList from './components/allPair';

function App() {
  return (
    <>
      <PairList></PairList>
    </>
  );
}
export default observer(App);
