import { 
  LOGIN, 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGOUT, 
  LOGOUT_SUCCESS 
} from "../types";

export const authRequest = () => ({
  type: LOGIN_REQUEST
});

export const authUser = () => ({
  type: LOGIN
});

export const userLoggedIn = () => ({
  type: LOGIN_SUCCESS
});

export const logout = () => ({
  type: LOGOUT
});

export const userLogout = () => ({
  type: LOGOUT_SUCCESS
});