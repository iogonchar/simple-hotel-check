import { combineReducers } from 'redux';
import { favouritesReducer } from './favouritesReducer';
import { hotelsReducer } from './hotelReducer';
import { loginReducer } from './loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  hotels: hotelsReducer,
  favourites: favouritesReducer
});

export default rootReducer;