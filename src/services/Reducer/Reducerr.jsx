import { ADD_To_Cart, Remove_To_Cart } from '../constant';

const initialdata = [];

export const Cartdata = (state = initialdata, action) => {
  switch (action.type) {
    case ADD_To_Cart:
      console.log('reducer', action);
      return [...state, action.data];
    case Remove_To_Cart:
      console.log('RemoveReducer', action);

      const deleteitem = state.filter((item) => item.id !== action.data);
      console.log('deleteitem', deleteitem);

      return deleteitem.length !== state.length
        ? [...deleteitem]
        : (console.error('Item not found'), state);
    default:
      return state;
  }
};
