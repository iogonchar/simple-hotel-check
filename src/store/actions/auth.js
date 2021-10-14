import { 
  LOGIN_REQUEST,
  AUTH_REQUEST, 
  LOGIN_ACTION, 
  LOGOUT_REQUEST, 
  LOGOUT_ACTION 
} from "../types";

// --- START Login ---
// dispatch from LoginForm, on login user
export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

// dispatch from App, on auth user if localstorage contains token
export const authRequest = () => ({
  type: AUTH_REQUEST
});

// put from loginSaga
export const loginAction = () => ({
  type: LOGIN_ACTION
});
// --- END Login ---

// --- START Logout ---
// dispatch from Header component, on logout user
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST
});

// put from logoutSaga
export const logoutAction = () => ({
  type: LOGOUT_ACTION
});
// --- END Logout ---
