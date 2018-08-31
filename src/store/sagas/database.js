import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Actions as DatabaseActions } from '../ducks/database';

export function* getDatabase(action) {
  try {
    let response = null;
    let data = null;

    if (!action.payload.id) {
      response = yield call(api.get, '/products');
      data = response.data;
    } else {
      response = yield call(api.get, `/category_products/${action.payload.id}`);
      data = response.data.products;
    }

    yield put(DatabaseActions.saveData(data));
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

export function* getCategories(action) {
  try {
    const response = yield call(api.get, `/category_products/${action.payload.id}`);

    yield put(DatabaseActions.saveData(response.data.products));
  } catch (err) {
    yield put(DatabaseActions.setError('Erro ao obter categoria'));
  }
}
