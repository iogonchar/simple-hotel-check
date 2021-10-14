import { put, call } from 'redux-saga/effects';

import { getHotels } from '../../api/api';
import { hotelsAction } from '../actions/hotels';

export function* hotelsSaga(action) {
  try {
    const data = yield call(getHotels, action.location, action.checkInDate, action.checkOutDate, action.daysAmount);

    yield put(hotelsAction({ 
      data, 
      checkInDate: action.checkInDate,
      daysAmount: action.daysAmount,
      hotelLocation: action.location
    }));

  } catch (err) {
    console.log(err);
  }
}
