import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.get, `deliverymen/${id}`);
    const deliveryman = response.data;

    if (!deliveryman) {
      Alert.alert('Erro no login', 'Código de entregador não encontrado');
      return;
    }

    yield put(signInSuccess(deliveryman));
  } catch (e) {
    Alert.alert(
      'Erro no login',
      'Falha ao se autenticar. Verifique seu dados.'
    );
    yield put(signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
