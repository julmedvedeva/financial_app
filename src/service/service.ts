const path = 'https://api.flatqube.io/v1/pairs/meta';

export const getPair = () => {
  return fetch(path).then((res) => {
    return res.json();
  });
};

export const buyPair = (pair: any) => {
  console.log('pair', pair);
  return fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(pair),
  });
};
