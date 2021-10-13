import { 
  LOGIN, 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGOUT, 
  LOGOUT_SUCCESS 
} from "../types";

// saga actions
// При входе через форму
export const authRequest = () => ({
  type: LOGIN_REQUEST
});

// Если есть токен
export const authUser = () => ({
  type: LOGIN
});

export const logout = () => ({
  type: LOGOUT
});

// redux actions
export const userLoggedIn = () => ({
  type: LOGIN_SUCCESS
});

export const userLogout = () => ({
  type: LOGOUT_SUCCESS
});