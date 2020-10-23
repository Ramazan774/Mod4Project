import * as types from '../actions/actionTypes'

export default (state=[], action) => {
    switch(action.type){
        case types.REQUEST_TODOS:
            return action.todos

        case types.ADD_TODO:
            return [...state, action.todo]

        case types.UPDATE_TODO:
            return state.map(todo => todo.id === action.todo.id ? action.todo : todo )

        case types.DELETE_TODO:
            const todos = state.filter(todo => todo.id !== action.todoId)
            return todos

        default:
            return state
    }
}
