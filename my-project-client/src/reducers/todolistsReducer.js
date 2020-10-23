import * as types from '../actions/actionTypes'

export default (state=[], action) => {
    switch(action.type){
        case types.REQUEST_TODOLISTS:
            return action.todolists

        case types.ADD_TODO:
            return [...state, action.todo]

        case types.UPDATE_TODO:
            return state.map(todo => todo.id === action.todo.id ? action.todo : todo)

        case types.DELETE_TODO:
            const todolists = state.filter(todo => todo.id !== action.todoId)
            return todolists
        
        default:
            return state
    }
}