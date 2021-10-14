import { 
  ADD_TO_FAVOURITES_REQUEST, 
  ADD_TO_FAVOURITES_ACTION,
  REMOVE_FROM_FAVOURITES_REQUEST,
  REMOVE_FROM_FAVOURITES_ACTION,
  SORT_FAVOURITES 
} from "../types";

// --- START add to favourites ---
// dispatch from SearchResults
export const addToFavouritesRequest = (hotel) => ({
  type: ADD_TO_FAVOURITES_REQUEST,
  hotel
});

// put from favouritesSaga
export const addToFavouritesAction = (hotel) => ({
  type: ADD_TO_FAVOURITES_ACTION,
  payload: {
    ...hotel
  }
});
// --- END add to favourites ---

// --- START remove from favourites ---
// dispatch from SearchForm || SearchResults
export const removeFromFavouritesRequest = (hotel) => ({
  type: REMOVE_FROM_FAVOURITES_REQUEST,
  hotel
});

// put from favouritesSaga
export const removeFromFavouritesAction = (hotel) => ({
  type: REMOVE_FROM_FAVOURITES_ACTION,
  payload: {
    ...hotel
  }
});
// --- END remove from favourites ---

export const sortFavourites = (sortMethod) => ({
  type: SORT_FAVOURITES,
  sortMethod
})