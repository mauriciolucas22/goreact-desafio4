import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Actions as DatabaseActions } from '../ducks/database';

export function* getDatabase() {
  try {
    const response = yield call(api.get, '/products');

    yield put(DatabaseActions.saveData(response.data));
  } catch (err) {
    yield put(DatabaseActions.setError('Erro ao obter base de dados!'));
  }
}

export function* getProduct(action) {
  try {
    const response = yield call(api.get, `/products/${action.payload.productID}`);

    yield put(DatabaseActions.setProductSelected(response.data));
  } catch (err) {
    yield put(DatabaseActions.setError('Erro ao obter produto!'));
  }
}
