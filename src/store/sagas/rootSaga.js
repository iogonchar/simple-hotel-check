import { takeLatest } from 'redux-saga/effects';

import { 
  LOGIN_REQUEST,
  AUTH_REQUEST,
  LOGOUT_REQUEST,
  HOTELS_REQUEST, 
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SORT_FAVOURITES
} from '../types';

import { hotelsRequestSaga } from './hotelsSaga';
import { addToFavouritesSaga, removeFromFavouritesSaga, sortFavouritesSaga } from './favouritesSaga';
import { loginSaga, authSaga } from "./loginSaga";
import { logoutSaga } from './logoutSaga';

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga)
  yield takeLatest(AUTH_REQUEST, authSaga);
  yield takeLatest(LOGOUT_REQUEST, logoutSaga);
  yield takeLatest(HOTELS_REQUEST, hotelsRequestSaga);
  yield takeLatest(ADD_TO_FAVOURITES, addToFavouritesSaga);
  yield takeLatest(REMOVE_FROM_FAVOURITES, removeFromFavouritesSaga);
  yield takeLatest(SORT_FAVOURITES, sortFavouritesSaga)
}