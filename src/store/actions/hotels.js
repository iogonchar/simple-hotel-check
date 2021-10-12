import { HOTELS_REQUEST } from "../types";

export const hotelsRequest = (location, checkInDate, checkOutDate, daysAmount) => ({
  type: HOTELS_REQUEST,
  location,
  checkInDate,
  checkOutDate,
  daysAmount
});
