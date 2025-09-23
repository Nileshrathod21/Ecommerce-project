import { combineReducers } from 'redux';
import { Cartdata } from './Reducerr';
import { ProductReducerData } from './ProductReducer';

export const rootreducer = combineReducers({
  Cartdata,
  ProductReducerData,
});
