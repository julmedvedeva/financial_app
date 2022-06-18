import axios from 'axios';

const path = 'https://api.flatqube.io/v1/pairs/meta/';
// const path =
// 'https://api.flatqube.io/v1/pairs/address/0:83b88abbcd562c8d8dc4cab30ec1ded86a4ded99000ca02425715e5cec754f06';

export const getPair = () => {
  return fetch(path).then((res) => {
    console.log('res', res);
    return res.json();
  });
};

export const buyPair = () => {
  const generateRandomResult = Math.round(Math.random());
  let res: string;
  switch (generateRandomResult) {
    case 0:
      return (res = 'success');
    case 1:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return (res = 'fail');
  }
};
