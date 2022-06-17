import { observable, action, makeAutoObservable } from 'mobx';
import { buyPair, getPair } from './service/service';

export class PairStore {
  constructor() {
    makeAutoObservable(this);
  }
  @observable pairs: any[] | undefined = [];

  @action
  loadPairs = () => {
    getPair().then((pairs) => {
      const filterData = (arr: any, query: string, ent: string) => {
        return arr.filter((el: any) => el[ent] === query);
      };
      const finishAr = filterData(pairs, 'USDT', 'counter');
      this.pairs = [...finishAr];
    });
  };

  @action
  buyPairs = (pair: any) => {
    buyPair(pair);
  };
}
