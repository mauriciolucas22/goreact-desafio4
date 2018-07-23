import { select, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Actions as CartActions } from '../ducks/cart';

export function* getCart() {
  try {
    // const response = yield call(api.get, '/products');
    const response = yield select(state => state.cart.data);
    console.tron.log(response);
    // yield put(CartActions.addToCart(response));
  } catch (err) {
    console.tron.log('Error in get Cart');
  }
}
