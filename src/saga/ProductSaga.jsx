import { put, takeEvery } from 'redux-saga/effects';
import {
  PRODUCT_LIST,
  PRODUCT_SEARCH,
  SET_PRODUCT_LIST,
} from '../services/constant';

function* Getdata() {
  const Url = 'https://dummyjson.com/products';
  let respone = yield fetch(Url);
  respone = yield respone.json();

  //   console.log('call api here', respone);
  yield put({ type: SET_PRODUCT_LIST, data: respone.products }); // put is used to dispatch an action
}
function* GetSearchData(action) {
  try {
    const Url = `https://dummyjson.com/products/search?q=${action.data}`;
    let response = yield fetch(Url);
    response = yield response.json();
    console.log('Search API response', response);
    yield put({ type: SET_PRODUCT_LIST, data: response });
  } catch (error) {
    console.error('Search API failed', error);
  }
}

function* Productsaga() {
  yield takeEvery(PRODUCT_LIST, Getdata); // it's take 2 param 1 which excatly type to run 2 whice function to call
  yield takeEvery(PRODUCT_SEARCH, GetSearchData);
}

export default Productsaga;
