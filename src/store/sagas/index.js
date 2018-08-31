import { all, takeLatest } from 'redux-saga/effects';

import { Types as DatabaseTypes } from '../ducks/database';
import { Types as CartTypes } from '../ducks/cart';

import { getDatabase, getProduct, getCategories } from './database';
import { getCart } from './cart';

export default function* rootSaga() {
  yield all([
    takeLatest(DatabaseTypes.GET, getDatabase),
    takeLatest(DatabaseTypes.GET_PRODUCT, getProduct),
    takeLatest(DatabaseTypes.GET_CATEGORIES, getCategories),
    takeLatest(CartTypes.GET, getCart),
  ]);
}
