import { put } from 'redux-saga/effects';

import { 
  SORT_FAVOURITES_SUCCESS
} from '../types';

import { addToFavouritesAction, removeFromFavouritesAction } from '../actions/favourites';


export function* addToFavouritesSaga(action) {
  yield put(addToFavouritesAction({ hotel: action.hotel }))
}

export function* removeFromFavouritesSaga(action) {
  yield put(removeFromFavouritesAction({ hotel: action.hotel }))
}

export function* sortFavouritesSaga(action) {
  yield put({
    type: SORT_FAVOURITES_SUCCESS,
    payload: {
      sortMethod: action.sortMethod
    }
  })
}