import axios from 'axios';

const path = 'https://api.flatqube.io/v1/pairs/meta/';

const instance = axios.create({
  baseURL: 'https://api.flatqube.io/v1/pairs/',
  headers: {},
});

export const getPairs = () => {
  return fetch(path).then((res) => {
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

export const getPair = async (poolAddress: string) => {
  return await axios({
    method: 'post',
    url: `https://api.flatqube.io/v1/pairs/address/${poolAddress}`,
  }).then((res) => {
    // const response = JSON.parse(JSON.stringify(res)).data;
    const response = res;
    console.log('in service', response);
    return response;
  });
};

export const getPairDetails = async (id: string) => {
  await instance.post(`/address/${id}`).then((res) => {
    return res.data;
  });
};
