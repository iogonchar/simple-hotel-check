import { takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGIN_REQUEST, LOGOUT } from '../types';
import { loginRequestSaga, loginSaga } from "./loginSaga";
import { logoutSaga } from './logoutSaga';

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequestSaga)
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}