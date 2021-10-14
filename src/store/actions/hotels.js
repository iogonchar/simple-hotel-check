import { HOTELS_REQUEST, HOTELS_ACTION } from "../types";

// dispatch from SearchForm || SearchResults
export const hotelsRequest = (params) => ({
  type: HOTELS_REQUEST,
  ...params
});

// put from hotelsSaga
export const hotelsAction = (params) => ({
  type: HOTELS_ACTION,
  payload: {
    ...params
  }
});
