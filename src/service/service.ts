const path = 'https://api.flatqube.io/v1/pairs/meta';

export const getPair = () => {
  return fetch(path).then((res) => {
    return res.json();
  });
};
