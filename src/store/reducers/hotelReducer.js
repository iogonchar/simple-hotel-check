const initialState = {
  checkInDate: null,
  daysAmount: null,
  hotelLocation: 'Москва',
  hotels: []
}

export const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HOTELS_SUCCESS': {
      // console.log('AAAA', action.payload.data);
      return {
        ...state,
        checkInDate: action.payload.checkInDate,
        daysAmount: action.payload.daysAmount,
        hotelLocation: action.payload.hotelLocation,
        // hotelLocation: action.payload.data.location, 
        hotels: [
          ...action.payload.data
        ]
      }
    }
    default:
      return state;
  }
}