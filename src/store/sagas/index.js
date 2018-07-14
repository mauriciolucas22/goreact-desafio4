import { all, takeLatest } from 'redux-saga/effects';

import { Types as DatabaseTypes } from '../ducks/database';

import { getDatabase } from './database';

export default function* rootSaga() {
  yield all([
    takeLatest(DatabaseTypes.GET, getDatabase),
  ]);
}
