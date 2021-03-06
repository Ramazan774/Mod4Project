import React from 'react'
import {Form, Button, Col } from 'react-bootstrap'
import {connect} from 'react-redux'
import {updateTodo} from '../actions/todoActions'

class EditTodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: props.todo.editingTodoId,
            title: props.todo.title,
            content: props.todo.content,
            todolistId: props.todo.todolistId,
            isEditing: props.todo.isEditing
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
        this.props.updateTodo(this.state)
        this.props.toggleEdit(this.state.id)
    }

    render(){
        const isEnabled = this.state.title.length && this.state.content.length > 0
        return (
            <div>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Col sm="12">
                            <Form.Control
                            size="lg"
                            type="text"
                            name="title"
                            onChange={this.handleOnChange}
                            value={this.state.title}
                            placeholder="Title"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId='exampleForm.ControlTextare1'>
                        <Col sm='12'>
                            <Form.Control
                            as='textarea'
                            name='content'
                            onChange={this.handleOnChange}
                            value={this.state.content}
                            rows='15'
                            placeholder='Type here' />
                        </Col>
                    </Form.Group>
                    <Col sm='12'>
                        <Button disabled={!isEnabled} bsStyle='primary' type='submit'>Save</Button>
                    </Col>
                </Form>
            </div>
        )
    }
}

export default connect(null, {updateTodo})(EditTodoForm)