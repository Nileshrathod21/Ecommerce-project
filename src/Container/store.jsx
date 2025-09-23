import { configureStore } from '@reduxjs/toolkit';
import { rootreducer } from '../services/Reducer/RootReducerr';
import Productsaga from '../saga/ProductSaga';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();
export const Store = configureStore({
  reducer: { reducer: rootreducer },
  middleware: () => [sagaMiddleware],
}); // 2
sagaMiddleware.run(Productsaga);
