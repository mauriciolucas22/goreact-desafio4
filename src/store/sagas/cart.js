import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Actions as CartActions } from '../ducks/cart';

export function* getCart() {
  try {
    const response = yield call(api.get, '/products');

    yield put(CartActions.addToCart(response.data));
  } catch (err) {
    console.tron.log('Error in get Cart');
  }
}
