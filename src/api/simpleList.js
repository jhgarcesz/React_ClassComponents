import PRODUCTS from './productList'

export const getProducts = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(PRODUCTS), 1000);
  });
