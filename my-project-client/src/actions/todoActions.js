import * as types from './actionTypes'

const todolistsLink = '/api/v1/todolists'

const setTodos = todos => {
    return {type: types.REQUEST_TODOS, todos}
}

const addTodo = todo => {
    return {type:types.ADD_TODO, todo}
}

const setTodo = todo => {
    return {type: types.UPDATE_TODO, todo}
}

const removeTodo = todoId => {
    return {type: types.DELETE_TODO, todoId}
}

export const getTodos = (todolistId) => {
    return (dispatch) => {
        fetch(`${todolistsLink}/${todolistId}/todos`)
            .then(resp => resp.json())
            .then(todos => {
                dispatch(setTodos(todos))
            })
            .catch(err => console.log(err))
    }
}

export const createTodo = (todo) => {
    const todolistId = todo.todolistId
    const title = todo.title
    const content = todo.content

    return (dispatch) => {
        fetch(`${todolistsLink}/${todolistId}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, content, todolistId})
        })
        .catch(err => console.log(err))
    }
}

export const deleteTodo = todo => {
    const todoId = todo.id
    const todolistId = todo.todolist.id

    return(dispatch) => {
        fetch(`${todolistsLink}/${todolistId}/todos/${todoId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => {
                dispatch(removeTodo(todoId))
            })
            .catch(err => console.log(err))
    }
}

export const updateTodo = todo => {
    const title = todo.title
    const content = todo.content
    const todoId = todo.id
    const todolistId = todo.todolistId

    return (dispatch){
        fetch(`${todolistsLink}/${todolistId}/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, content, todolistId})
        })
        .then(resp => resp.json())
        .then(todo => {
            dispatch(setTodo(todo))
        })
        .catch(err => console.log(err))
    }
}