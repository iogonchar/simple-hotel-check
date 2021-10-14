import { 
  ADD_TO_FAVOURITES_ACTION,
  REMOVE_FROM_FAVOURITES_ACTION,
  SORT_FAVOURITES_SUCCESS,
  RATING_HIGH,
  RATING_LOW,
  PRICE_HIGH,
  PRICE_LOW
} from "../types";

const initialState = {
  sortMethod: null,
  favourites: []
}

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES_ACTION: {
      if (state.sortMethod === RATING_HIGH) {
        const updatedFavourites = [ ...state.favourites, action.payload.hotel ];
        return {
          ...state,
          favourites: [...updatedFavourites.sort((a, b) => a.stars < b.stars ? 1 : -1)]
        }
      }

      if (state.sortMethod === RATING_LOW) {
        const updatedFavourites = [ ...state.favourites, action.payload.hotel ];
        return {
          ...state,
          favourites: [...updatedFavourites.sort((a, b) => a.stars > b.stars ? 1 : -1)]
        }
      }

      if (state.sortMethod === PRICE_HIGH) {
        const updatedFavourites = [ ...state.favourites, action.payload.hotel ];
        return {
          ...state,
          favourites: [...updatedFavourites.sort((a, b) => a.priceFrom < b.priceFrom ? 1 : -1)]
        }
      }

      if (state.sortMethod === PRICE_LOW) {
        const updatedFavourites = [ ...state.favourites, action.payload.hotel ];
        return {
          ...state,
          favourites: [...updatedFavourites.sort((a, b) => a.priceFrom > b.priceFrom ? 1 : -1)]
        }
      }

      return {
        ...state,
        favourites: [
          ...state.favourites,
          action.payload.hotel
        ]
      }
    }
    case REMOVE_FROM_FAVOURITES_ACTION: {
      return {
        favourites: state.favourites.filter((item) => item.hotelId !== action.payload.hotel.hotelId)
      }
    }
    case SORT_FAVOURITES_SUCCESS: {
      if (action.payload.sortMethod === RATING_HIGH) {
        return {
          ...state,
          sortMethod: action.payload.sortMethod,
          favourites: [ ...state.favourites.sort((a, b) => a.stars < b.stars ? 1 : -1) ]
        }
      }

      // Рейтинг от меньшего к большему
      if (action.payload.sortMethod === RATING_LOW) {
        return {
          ...state,
          sortMethod: action.payload.sortMethod,
          favourites: [ ...state.favourites.sort((a, b) => a.stars > b.stars ? 1 : -1) ]
        }
      }

      // Цена от большей к меньшей
      if (action.payload.sortMethod === PRICE_HIGH) {
        return {
          ...state,
          sortMethod: action.payload.sortMethod,
          favourites: [ ...state.favourites.sort((a, b) => a.priceFrom < b.priceFrom ? 1 : -1) ]
        }
      }

      // Цена от меньшй к большей
      if (action.payload.sortMethod === PRICE_LOW) {
        return {
          ...state,
          sortMethod: action.payload.sortMethod,
          favourites: [ ...state.favourites.sort((a, b) => a.priceFrom > b.priceFrom ? 1 : -1) ]
        }
      }

      return {
        ...state,
        sortMethod: null,
      }

    }
    default:
      return state;
  }
}