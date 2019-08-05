import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import counterReducer, { CounterState } from './reducers'

export interface ApplicationState {
  counter: CounterState
}

export default createStore(
  combineReducers({ counter: counterReducer}), 
  applyMiddleware(thunk)
)