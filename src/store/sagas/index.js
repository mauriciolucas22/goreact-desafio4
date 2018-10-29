import { all, takeLatest } from 'redux-saga/effects';

import { Types as DatabaseTypes } from '../ducks/database';

import {
  getDatabase,
  getCategories,
  getSupply,
  newCar,
  newAbastecimento,
  getCar,
} from './database';

export default function* rootSaga() {
  yield all([
    takeLatest(DatabaseTypes.GET, getDatabase),
    takeLatest(DatabaseTypes.GET_SUPPLY, getSupply),
    takeLatest(DatabaseTypes.GET_CATEGORIES, getCategories),
    takeLatest(DatabaseTypes.NEW_CAR_REQUEST, newCar),
    takeLatest(DatabaseTypes.CREATE_ABA_REQUEST, newAbastecimento),
    takeLatest(DatabaseTypes.GET_CAR_REQUEST, getCar),
  ]);
}
