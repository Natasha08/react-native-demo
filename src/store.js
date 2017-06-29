"use strict"

import { applyMiddleware, createStore } from "redux";
import _ from 'lodash';
import moment from 'moment';
import rootReducer from './reducers/index';

export default function(initialState: any=undefined) {
  const store = createStore(rootReducer);
  return store.subscribe(() => {
    console.log("store changed", store.getState());
  })
}
