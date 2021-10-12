import { put, call } from 'redux-saga/effects';

import { getHotels } from '../../api/api';

export function* hotelsRequestSaga(action) {
  try {
    // console.log('Дошли до хотел саги')
    const data = yield call(getHotels, action.location, action.checkInDate, action.checkOutDate, action.daysAmount);
    // console.log('AAA', action.location);
    yield put({ 
      type: 'HOTELS_SUCCESS', 
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
