import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import AddCoin from './addcoin';
import toaster from './toaster';
import Main from './main';
import Dashboard from './dashboard';
import ActiveCoin from './activeCoin';
import Settings from './settings';
import Interval from './interval';
import Login from './login';
import Dex from './dex';
import Dice from './dice';
import PBaaS from './pbaas';
import Mining from './mining';

const appReducer = combineReducers({
  AddCoin,
  toaster,
  Main,
  Dashboard,
  ActiveCoin,
  Settings,
  Interval,
  Login,
  Dex,
  Dice,
  PBaaS,
  Mining,
  routing: routerReducer,
});

// reset app state on logout
const initialState = appReducer({}, {});
const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;