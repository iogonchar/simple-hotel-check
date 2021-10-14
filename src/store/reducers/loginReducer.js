import { LOGIN_ACTION, LOGOUT_ACTION } from "../types"

const initialState = {
  isLoggedIn: false,
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      return {
        ...state,
        isLoggedIn: true,
      }
    }
    case LOGOUT_ACTION: {
      return {
        ...state,
        isLoggedIn: false,
      }
    }
    default:
      return state;
  }
}