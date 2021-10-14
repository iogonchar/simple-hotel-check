import { HOTELS_ACTION } from "../types";

const initialState = {
  checkInDate: null,
  daysAmount: null,
  hotelLocation: 'Москва',
  hotels: []
}

export const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOTELS_ACTION: {
      return {
        ...state,
        checkInDate: action.payload.checkInDate,
        daysAmount: action.payload.daysAmount,
        hotelLocation: action.payload.hotelLocation,
        hotels: [
          ...action.payload.data
        ]
      }
    }
    default: {
      return state;
    }
  }
}