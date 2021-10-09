import { put, call } from 'redux-saga/effects';

import { userLoggedIn } from '../actions/auth'

import * as auth from '../../api/auth';
import history from '../../history';

export function* loginRequestSaga() {
  // получаем токен
  const data = yield call(auth.login);
  // кладем токен в localstorage
  yield call(auth.saveToken, data.token);
  // обновляем store
  yield put(userLoggedIn());
  // перенаправляем
  history.push('/');
  
}

export function* loginSaga() {
  yield put(userLoggedIn());
  history.push('/');
}