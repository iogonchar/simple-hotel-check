import { put, call } from 'redux-saga/effects';

import { getHotels } from '../../api/api';

import { HOTELS_SUCCESS } from '../types';

export function* hotelsRequestSaga(action) {
  try {
    const data = yield call(getHotels, action.location, action.checkInDate, action.checkOutDate, action.daysAmount);

    yield put({ 
      type: HOTELS_SUCCESS, 
      payload: {
        data,
        checkInDate: action.checkInDate,
        daysAmount: action.daysAmount,
        hotelLocation: action.location
      } 
    })
  } catch (err) {
    console.log(err);
  }
  
}
