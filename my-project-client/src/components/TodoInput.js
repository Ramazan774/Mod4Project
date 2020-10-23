import React from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createTodo } from '../actions/todoActions'

class TodoInput extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        id: "",
        title: "",
        content: "",
        todolistId: this.props.todolistId,
    };
}

handleOnChange = (e) => {
    const { value, name } = e.target;
    this.setState({
        [name]: value,
    });
};

handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState({
        title: "",
        content: "",
    });
};

render() {
    const isEnabled = this.state.title.length && this.state.content.length > 0;
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
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Col sm="12">
                        <Form.Control
                        as="textarea"
                        name="content"
                        onChange={this.handleOnChange}
                        value={this.state.content}
                        rows="15"
                        placeholder="Add your task..."
                        />
                    </Col>
                </Form.Group>
                    <Col sm="12">
                        <Button disabled={!isEnabled} bsStyle="primary" type="submit">
                            Save
                        </Button>
                    </Col>
                </Form>
            </div>
        );
    }
}

export default connect(null, { createTodo })(TodoInput);