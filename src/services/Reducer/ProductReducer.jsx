import { PRODUCT_LIST, SET_PRODUCT_LIST } from '../constant';

const initialdata = [];

export const ProductReducerData = (state = initialdata, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log('ProductReducer', action);
      return [...state, action.data];
    case SET_PRODUCT_LIST:
      console.log('SETProductReducer', action);
      return [...action.data];

    default:
      return state;
  }
};
