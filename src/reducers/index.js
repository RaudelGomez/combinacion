import { combineReducers } from 'redux'
import texto from './todo'
import counter from './counter'

export default combineReducers({
  texto,
  counter
},)