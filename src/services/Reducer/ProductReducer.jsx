import { SET_PRODUCT_LIST } from '../constant';

const initialdata = [];

export const ProductReducerData = (state = initialdata, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      // Replace the product list with the payload (expected to be an array)
      if (Array.isArray(action.data)) {
        return action.data;
      }
      console.warn('SET_PRODUCT_LIST received non-array payload', action.data);
      return state;

    default:
      return state;
  }
};
