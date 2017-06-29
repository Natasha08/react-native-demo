import { combineReducers } from 'redux';
import nav, * as fromNav from './nav';
import auth from './auth';

export default combineReducers({ nav, auth })
