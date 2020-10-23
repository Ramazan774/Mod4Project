import React from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import {createTodolist, updateTodolist} from '..actions/todolistActions'
import {connect} from 'react-redux'

class TodolistInput extends React.Component {
    constructor(props){
        super(props)
        this.state={
            id: '',
            name: '',
            show: props.modal,
            isEdit: props.isEdit
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.state.show !== nextProps.modal){
            this.ListeningStateChangedEvent({show: nextProps.modal, isEdit: nextProps.isEdit})
        }
    }

    handleOnChange = e => {
        const {value, name} = e.target
            this.ListeningStateChangedEvent({
                [name]: value
            })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const todolistName = this.state.name
        const todolistId = JSON.stringify(this.props.todolist.id)
        if(this.state.isEdit){
            this.props.updateTodolist({todolistName, todolistId})
        } else {
            this.props.createTodolist(todolistName)
        }
        this.ListeningStateChangedEvent({
            name: ''
        })
    }

    render (){
        let close = () => this.ListeningStateChangedEvent({show: false})
        const isEnabled = this.state.name.length > 0

        return (
            <div>
                <div className='modal-container'>
                    <Modal
                        show={this.state.show}
                        onHide={close}
                        container={this}
                        aria-labelledby='contained-modal-title'
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id='contained-modal-title'>Todolist</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form className='form-group' onSubmit={this.handleOnSubmit}>
                                <label htmlFor='email'>name: </label>
                                <input type='text' className='form-control' name='name' onChange={this.handleOnChange} value={this.state.name} placeholder='todolist name' />
                                <br />
                                <Button disabled={!isEnabled} onClick={this.props.onHide} variant='primary' type='submit'>Save</Button>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={close}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default connect(null, {createTodolist, updateTodolist})(TodolistInput)