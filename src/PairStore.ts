import { observable, action, makeAutoObservable, runInAction } from 'mobx';
import { buyPair, getPair, getPairs } from './service/service';

export class PairStore {
  constructor() {
    makeAutoObservable(this);
  }
  @observable pairs: any[] | undefined = [];
  @observable state: string | undefined = '';
  @observable isLoading: boolean = true;
  @observable favouritePairs: any[] = [];
  @observable pairShort: {
    base?: string;
    counter?: string;
    poolAddress: string;
  } = {
    poolAddress: '',
  };

  @observable pairLong:
    | {
        fee7d: string;
        fee24h: string;
        leftLocked?: string;
        feeAllTime?: string;
        leftPrice?: string;
        rightLocked?: string;
        rightPrice?: string;
        tvl?: string;
        tvlChange?: string;
        volume7d?: string;
        volume24h?: string;
        volumeChange24h?: string;
        meta: {
          base: string;
          counter: string;
          baseAddress?: string;
          counterAddress?: string;
          fee?: string;
          lpAddress?: string;
          poolAddress?: string;
        };
      }
    | undefined;

  @action
  loadPairs = () => {
    setTimeout(() => {
      getPairs().then((pairs) => {
        const filterData = (arr: any, query: string, ent: string) => {
          return arr.filter((el: any) => el[ent] === query);
        };
        const finishAr = filterData(pairs, 'USDT', 'counter');
        this.pairs = [...finishAr];
      });
      this.isLoading = false;
    }, 1000);
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
  getPair = async (poolAddress: any) => {
    this.pairShort.poolAddress = poolAddress;
    const { data } = await getPair(poolAddress);
    runInAction(() => {
      this.setPairLong(data);
    });
  };

  setPairLong = (pair: any) => {
    this.pairLong = pair;
  };
}
