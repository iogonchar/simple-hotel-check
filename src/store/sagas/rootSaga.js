import { takeLatest } from 'redux-saga/effects';

import { 
  LOGIN_REQUEST,
  AUTH_REQUEST,
  LOGOUT_REQUEST,
  HOTELS_REQUEST, 
  ADD_TO_FAVOURITES_REQUEST,
  REMOVE_FROM_FAVOURITES_REQUEST,
  SORT_FAVOURITES
} from '../types';

import { hotelsSaga } from './hotelsSaga';
import { addToFavouritesSaga, removeFromFavouritesSaga, sortFavouritesSaga } from './favouritesSaga';
import { loginSaga, authSaga } from "./loginSaga";
import { logoutSaga } from './logoutSaga';

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga)
  yield takeLatest(AUTH_REQUEST, authSaga);
  yield takeLatest(LOGOUT_REQUEST, logoutSaga);
  yield takeLatest(HOTELS_REQUEST, hotelsSaga);
  yield takeLatest(ADD_TO_FAVOURITES_REQUEST, addToFavouritesSaga);
  yield takeLatest(REMOVE_FROM_FAVOURITES_REQUEST, removeFromFavouritesSaga);
  yield takeLatest(SORT_FAVOURITES, sortFavouritesSaga)
}