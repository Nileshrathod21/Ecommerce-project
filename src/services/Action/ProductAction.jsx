import { PRODUCT_LIST, PRODUCT_SEARCH } from '../constant';
export const ProductActionData = (data) => {
  console.log('ProductAction', data);
  return {
    type: PRODUCT_LIST,
    data: data,
  };
};
export const ProductSearch = (data) => {
  console.log('SearchProductAction', data);
  return {
    type: PRODUCT_SEARCH,
    data: data,
  };
};
