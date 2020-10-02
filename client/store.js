import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

//or move to seperate reducer js file for large redux store operation
//Use connect for dipatch and state

import reducerBPM from './getBeatsPerMin'

const reducer = combineReducers({
  BPM: reducerBPM
})

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store