import { combineReducers } from 'redux'
import todoReducer from '../todo/todoreducer'

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer