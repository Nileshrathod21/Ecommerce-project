import { ADD_To_Cart, Remove_To_Cart } from '../constant';

export const addToCart = (data) => {
  console.log('Action ', data);
  return {
    type: ADD_To_Cart,
    data: data,
  };
};
export const RemoveToCart = (data) => {
  console.log('Action ', data);
  return {
    type: Remove_To_Cart,
    data: data,
  };
};
