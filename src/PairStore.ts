import { observable, action, makeAutoObservable } from 'mobx';
import { buyPair, getPair } from './service/service';

export class PairStore {
  constructor() {
    makeAutoObservable(this);
  }
  @observable pairs: any[] | undefined = [];
  @observable state: string | undefined = '';
  @observable isLoading: boolean = true;
  @observable favouritePairs: any[] = [];

  @action
  loadPairs = () => {
    // setTimeout(() => {
    getPair().then((pairs) => {
      const filterData = (arr: any, query: string, ent: string) => {
        return arr.filter((el: any) => el[ent] === query);
      };
      const finishAr = filterData(pairs, 'USDT', 'counter');
      this.pairs = [...finishAr];
    });
    this.isLoading = false;
    // }, 5000);
  };

  @action buyPairs = () => {
    this.state = buyPair();
    switch (this.state) {
      case 'fail':
        alert('EROOR! TRY LATER');
        break;
      case 'success':
        break;
    }
  };

  @action addToFavourite(pair: any) {
    const pairs = this.gettingToFavourite();
    pairs!.push(pair);
    localStorage.setItem('favouritePairs', JSON.stringify(pairs));
  }

  @action gettingToFavourite = () => {
    if (localStorage.getItem('favouritePairs') === null) {
      this.favouritePairs = [];
    } else {
      this.favouritePairs = JSON.parse(
        localStorage.getItem('favouritePairs') || '',
      );
    }
    return this.favouritePairs;
  };
}
