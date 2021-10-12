import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SORT_FAVOURITES } from "../types";

export const addToFavourites = (hotel) => ({
  type: ADD_TO_FAVOURITES,
  hotel
});

export const removeFromFavourites = (hotel) => ({
  type: REMOVE_FROM_FAVOURITES,
  hotel
});

export const sortFavourites = (sortMethod) => ({
  type: SORT_FAVOURITES,
  sortMethod
})