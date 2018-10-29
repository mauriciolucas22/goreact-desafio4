import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Actions as DatabaseActions } from '../ducks/database';

export function* getDatabase(action) {
  try {
    // let response = null;
    // let data = null;

    const response = yield call(api.get, '/carros');

    /* if (!action.payload.id) {
      response = yield call(api.get, '/carros');
    } else {
      response = yield call(api.get, `/category_products/${action.payload.id}`);
      data = response.data.products;
    } */

    yield put(DatabaseActions.saveData(response.data));
  } catch (err) {
    yield put(DatabaseActions.setError('Erro ao obter base de dados!'));
  }
}

export function* getSupply(action) {
  try {
    const response = yield call(api.get, '/abastecimentos');

    yield put(DatabaseActions.setSupply(response.data));
  } catch (err) {
    yield put(DatabaseActions.setError('Erro ao obter abastecimentos!'));
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

export function* newCar(action) {
  try {
    const response = yield call(api.post, '/carros', { ...action.payload.data });

    yield put(DatabaseActions.newCarSuccess(response));
  } catch (err) {
    yield put(DatabaseActions.setError('Erro ao criar carro'));
  }
}

export function* newAbastecimento(action) {
  try {
    const {
      km,
      precoLitro,
      valor,
    } = action.payload.data;

    const check = yield call(api.get, `/carros?id=${action.payload.data.carroId}`);

    const {
      placa,
      marca,
      modelo,
      abastecimentos,
    } = check.data[0];

    const format = {
      placa,
      marca,
      modelo,
      abastecimentos: [
        ...abastecimentos,
        {
          id: Math.random(),
          km,
          valor,
          precoLitro,
        },
      ],
    };

    const update = yield call(api.put, `/carros/${action.payload.data.carroId}`, {...format});
    yield put(DatabaseActions.createAbastecimentoSuccess());
  } catch (err) {
    console.tron.log(err);
    yield put(DatabaseActions.setError('Erro ao criar carro'));
  }
}

export function* getCar(action) {
  try {
    const response = yield call(api.get, `/carros?id=${action.payload.data.carroId}`);

    console.tron.log(response);
    yield put(DatabaseActions.setSupply(response.data[0].abastecimentos));
  } catch (err) {
    console.tron.log(err);
    yield put(DatabaseActions.setError('Erro'));
  }
}
