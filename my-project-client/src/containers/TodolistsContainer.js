import React from 'react'
import TodolistInput from '../components/TodolistInput'
import Todolists from '../components/Todolists'
import {connect} from 'react-redux'
import {getTodolists, deleteTodolist} from '../actions/todolistActions'
import {Button, ButtonToolbar} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

class TodolistsContainer extends React.Component {
    constructor(){
        super()
        this.state={
            id: null,
            name: null,
            show: false,
            isEdit: false,
            todolistArray: null,
            isSort: false
        }
        this.toggleEditButton = this.toggleEditButton.bind(this)
    }

    toggleEditButton(todolist){
        this.setState({
            id: todolist.id,
            name: todolist.name,
            isEdit: true,
            show: true
        })
    }

    sortHandler = e => {
        const newTodolistsArr = this.props.todolistsList.map(todolist => todolist)
        const sortedArr = newTodolistsArr.sort(function(a, b) {
            let nameA = a.name.toUpperCase()
            let nameB = b.name.toUpperCase()
            if(nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0
        })

        this.setState({
            show: false,
            todolistArray: sortedArr,
            isSort: true
        })
    }

    resetHandler = e => {
        this.setState({
            show: false,
            todolistArray: this.props.todolistsList,
            isSort: false
        })
    }

    componentDidMount(){
        this.props.getTodolists()
    }

    componentDidUpdate(prevProps){
        if(prevProps.todolistsList !!== this.props.todolistsList){
            this.setState({
                isSort: false
            })
        }
    }

    render(){
        let close = () => this.setState({show: false})
        return(
            <div>
                <div className='todolist-page-title'>
                    My todolist
                </div>
                <div className='container-fluid-one'>
                    <Button
                        className='addTodolist-btn'
                        variant='primary'
                        onClick={() => this.setState({show: true, isEdit: false})}
                        >
                            + new todolist
                        </Button>
                </div>
                <div className='container-fluid-two'>
                    <Button
                        className='sort-btn'
                        variant='light'
                        onClick={this.sortHandler}>
                        Sort A-Z
                    </Button>
                    <Button
                        className='sort-btn'
                        variant='light'
                        onClick={this.resetHandler}>
                        Reset
                    </Button>
                </div>
                <div>
                    <TodolistInput
                        isEdit={this.state.isEdit}
                        modal={this.state.show}
                        onHide={close}
                        todolist={this.state}
                        toggleEditButton={this.toggleEditButton} />
                </div>
                <div>
                    {this.state.isSort?
                    <Todolists 
                    todolistsList={this.props.todolistsList}
                    deleteTodolist={this.props.deleteTodolist}
                    toggleEditButton={this.toggleEditButton} />
                    :
                    <Todolists todolistsList={this.props.todolistsList}
                    deleteTodolist={this.props.deleteTodolist}
                    toggleEditButton={this.toggleEditButton} />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        todolistsList: state.todolists
    }
}

export default connect(mapStateToProps, {getTodolists, deleteTodolist})(TodolistsContainer)
