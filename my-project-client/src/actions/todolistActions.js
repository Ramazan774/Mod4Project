import * as types from './actionTypes'

const todolistsLink = '/api/v1/todolists'

const setTodolists = todolists => {
    return {type: types.REQUEST_TODOLISTS, todolists}
}

const addTodolist = todolist => {
    return {type:types.ADD_TODOLIST, todolist}
}

const setTodolist = todolist => {
    return {type: types.UPDATE_TODOLIST, todolist}
}

const removeTodolist = todolistId => {
    return {type: types.DELETE_TODOLIST, todolistId}
}

export const getTodolists = () => {
    return (dispatch) => {
        fetch(todolistsLink)
            .then(resp => resp.json())
            .then(todolists => {
                dispatch(setTodolists(todolists))
            })
            .catch(err => console.log(err))
    }
}

export const createTodolist = todolistName => {

    return (dispatch) => {
        fetch(todolistsLink, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: todolistName})
        })
        .then(resp => resp.json())
        .then(todolist => {
            dispatch(addTodolist(todolist))
        })
        .catch(err => console.log(err))
    }
}

export const updateTodolist = (todolist) => {
    const name = todolist.name
    const todolistId = todolist.todolistId

    return (dispatch){
        fetch(`${todolistsLink}/${todolistId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name})
        })
        .then(resp => resp.json())
        .then(todolist => {
            dispatch(setTodolist(todolist))
        })
        .catch(err => console.log(err))
    }
}

export const deleteTodolist = (todolistId) => {

    return(dispatch) => {
        fetch(`${todolistsLink}/${todolistId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => {
                dispatch(removeTodolist(todolistId))
            })
            .catch(err => console.log(err))
    }
}

