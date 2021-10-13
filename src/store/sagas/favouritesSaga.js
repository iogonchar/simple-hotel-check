import { put } from 'redux-saga/effects';

import { 
  ADD_TO_FAVOURITES_SUCCESS,
  REMOVE_FROM_FAVOURITES_SUCCESS,
  SORT_FAVOURITES_SUCCESS
} from '../types';

export function* addToFavouritesSaga(action) {
  yield put({
    type: ADD_TO_FAVOURITES_SUCCESS,
    payload: {
      hotel: action.hotel
    }
  })
}

export function* removeFromFavouritesSaga(action) {
  yield put({ 
    type: REMOVE_FROM_FAVOURITES_SUCCESS,
    payload: {
      hotel: action.hotel
    }
  })
}

export function* sortFavouritesSaga(action) {
  yield put({
    type: SORT_FAVOURITES_SUCCESS,
    payload: {
      sortMethod: action.sortMethod
    }
  })
}