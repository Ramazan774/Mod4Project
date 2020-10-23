import {combineReducers} from 'redux'
import todolistsReducer from './todolistsReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
    todolists: todolistsReducer,
    todos: todosReducer
})

export default rootReducer