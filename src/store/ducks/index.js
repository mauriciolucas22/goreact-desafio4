import { combineReducers } from 'redux';

import cart from './cart';
import database from './database';

export default combineReducers({
  cart,
  database,
});
