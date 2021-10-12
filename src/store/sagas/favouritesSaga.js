import { put } from 'redux-saga/effects';

export function* addToFavouritesSaga(action) {
  console.log('пытаюсь добавить в избранное')
  console.log('ИЗ САГИ', action.hotel)
  yield put({
    type: 'ADD_TO_FAVOURITES_SUCCESS',
    payload: {
      hotel: action.hotel
    }
  })
}

export function* removeFromFavouritesSaga(action) {
  yield put({ 
    type: 'REMOVE_FROM_FAVOURITES_SUCCESS',
    payload: {
      hotel: action.hotel
    }
  })
}

export function* sortFavouritesSaga(action) {
  console.log(action)
  yield put({
    type: 'SORT_FAVOURITES_SUCCESS',
    payload: {
      sortMethod: action.sortMethod
    }
  })
}