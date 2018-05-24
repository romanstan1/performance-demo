import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
import logger from 'redux-logger'

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import data from './reducers'

const middleware = [
  // thunk
  // logger
]

const rootReducer = combineReducers({
  routing: routerReducer,
  data,
})

const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware(...middleware));

export default configureStore
