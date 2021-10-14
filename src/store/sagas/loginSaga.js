import { put, call } from 'redux-saga/effects';

import { loginAction } from '../actions/auth'

import * as auth from '../../api/auth';
import history from '../../history';

export function* loginSaga() {
  // получаем токен
  const data = yield call(auth.login);
  // кладем токен в localstorage
  yield call(auth.saveToken, data.token);
  // обновляем store
  yield put(loginAction());
  // перенаправляем
  history.push('/');
  
}

export function* authSaga() {
  yield put(loginAction());
  history.push('/');
}