import { put, call } from 'redux-saga/effects';

import { logoutAction } from '../actions/auth';

import * as auth from '../../api/auth';

export function* logoutSaga() {
  yield call(auth.removeToken);
  yield put(logoutAction());
}