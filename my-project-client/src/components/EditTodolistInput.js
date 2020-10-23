import React from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import {updateTodolist} from '../actions/todolistActions'
import {connect} from 'react-redux'

class EditTodolistInput extends React.Component {
    constructor(props){
        super(props)
        this.state={
            id: props.todolist.id,
            name: props.todolist.name,
            isEdit: props.modal
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.state.isEdit !== nextProps.modal){
            this.setState({isEdit: nextProps.modal})
        }
    }

    handleOnChange = e => {
        const {value, name} = e.target
            this.setState({
                [name]: value
            })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.toggleEditButton(this.state)
    }

    render(){
        let x = () => this.props.toggleEditButton
        const isEnabled = this.state.name.length > 0

        return(
            <div>
                <div className='modal-container'>
                    <Modal
                        show={this.state.isEdit}
                        onHide={x}
                        container={this}
                        aria-labelledby='contained-modal-title'
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id='contained-modal-title'>Todolist</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form className='form-group' onSubmit={this.handleOnSubmit}>
                                <label htmlFor='email'>name: </label>
                                <input type='text' className='form-control' name='name' onChange={this.handleOnChange} value={this.state.name} />
                                <br />
                                <Button disabled={!isEnabled} onClick={this.props.onHide} variant='primary' type='submit'>Save</Button>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={x}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default connect(null, {updateTodolist})(EditTodolistInput)