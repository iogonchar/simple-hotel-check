const initialState = {
  sortMethod: null,
  favourites: []
}

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITES_SUCCESS': {
      if (state.sortMethod === 'RATING_HIGH') {
        const updatedFavourites = [ ...state.favourites, action.payload.hotel ];
        return {
          ...state,
          favourites: [...updatedFavourites.sort((a, b) => a.stars < b.stars ? 1 : -1)]
        }
      }

      if (state.sortMethod === 'RATING_LOW') {
        const updatedFavourites = [ ...state.favourites, action.payload.hotel ];
        return {
          ...state,
          favourites: [...updatedFavourites.sort((a, b) => a.stars > b.stars ? 1 : -1)]
        }
      }

      if (state.sortMethod === 'PRICE_HIGH') {
        const updatedFavourites = [ ...state.favourites, action.payload.hotel ];
        return {
          ...state,
          favourites: [...updatedFavourites.sort((a, b) => a.priceFrom < b.priceFrom ? 1 : -1)]
        }
      }

      if (state.sortMethod === 'PRICE_LOW') {
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
    case 'REMOVE_FROM_FAVOURITES_SUCCESS': {
      return {
        favourites: state.favourites.filter((item) => item.hotelId !== action.payload.hotel.hotelId)
      }
    }
    case 'SORT_FAVOURITES_SUCCESS': {
      console.log('SORT STATE:', state)
      console.log('SORT ACTION:', action)
      // Рейтинг от большего к меньшему
      if (action.payload.sortMethod === 'RATING_HIGH') {
        return {
          ...state,
          sortMethod: action.payload.sortMethod,
          favourites: [ ...state.favourites.sort((a, b) => a.stars < b.stars ? 1 : -1) ]
        }
      }

      // Рейтинг от меньшего к большему
      if (action.payload.sortMethod === 'RATING_LOW') {
        return {
          ...state,
          sortMethod: action.payload.sortMethod,
          favourites: [ ...state.favourites.sort((a, b) => a.stars > b.stars ? 1 : -1) ]
        }
      }

      // Цена от большей к меньшей
      if (action.payload.sortMethod === 'PRICE_HIGH') {
        return {
          ...state,
          sortMethod: action.payload.sortMethod,
          favourites: [ ...state.favourites.sort((a, b) => a.priceFrom < b.priceFrom ? 1 : -1) ]
        }
      }

      // Цена от меньшй к большей
      if (action.payload.sortMethod === 'PRICE_LOW') {
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