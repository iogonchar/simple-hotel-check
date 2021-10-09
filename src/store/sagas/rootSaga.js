import { takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGIN_REQUEST } from '../types';
import { loginRequestSaga, loginSaga } from "./loginSaga";

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequestSaga)
  yield takeLatest(LOGIN, loginSaga);
}