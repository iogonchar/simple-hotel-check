import { takeLatest } from 'redux-saga/effects';

import { 
  LOGIN, 
  LOGIN_REQUEST, 
  LOGOUT, 
  HOTELS_REQUEST, 
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SORT_FAVOURITES
} from '../types';

import { hotelsRequestSaga } from './hotelsSaga';
import { addToFavouritesSaga, removeFromFavouritesSaga, sortFavouritesSaga } from './favouritesSaga';
import { loginRequestSaga, loginSaga } from "./loginSaga";
import { logoutSaga } from './logoutSaga';

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequestSaga)
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(HOTELS_REQUEST, hotelsRequestSaga);
  yield takeLatest(ADD_TO_FAVOURITES, addToFavouritesSaga);
  yield takeLatest(REMOVE_FROM_FAVOURITES, removeFromFavouritesSaga);
  yield takeLatest(SORT_FAVOURITES, sortFavouritesSaga)
}