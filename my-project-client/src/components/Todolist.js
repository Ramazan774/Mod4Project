import React from "react"
import { Dropdown } from "react-bootstrap"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

class Notebook extends React.Component {
    render() {
        const date = new Date(this.props.todolist.created_at)
        const srr = this.props.todolist.name.split("")[0].toUpperCase()
        const str = this.props.todolist.name.split("").slice(1).join("")
        const upcaseName = srr.concat(str)
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="2">{this.props.todolist.id}</Col>
                        <Col><Link to={
                            {pathname: `/todolists/${this.props.todolist.id}/todos`, 
                            state: { todolistId: this.props.todolist.id }}}>{upcaseName}
                        </Link>
                        </Col>
                        <Col sm="2">{new Intl.DateTimeFormat("en-US").format(date)}</Col>
                        <Col sm="2">{this.props.todolist.user.name}</Col>
                        <Col sm="2">
                            <Dropdown>
                                <Dropdown.Toggle
                                variant="Secondary"
                                id="dropdown-basic"
                                ></Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item
                        as="button"
                        onClick={() =>
                        this.props.toggleEditButton(this.props.todolist)}
                    >
                        Update Task
                    </Dropdown.Item>
                    <Dropdown.Item
                        as="button"
                        onClick={() =>
                        this.props.deleteTodolist(this.props.todolist.id)
                        }
                    >
                        Delete todolist
                    </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>
            </Container>
        </div>
        );
    }
}

export default Todolist