import React from 'react'
import {Card} from 'react-bootstrap'

class Note extends React.Component {
    render(){
        return(
            <div>
                <Card style={{width: '22rem'}}>
                    <Card.Body>
                        <Card.Title>{this.props.todo.title}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>id: {this.props.todo.id}</Card.Subtitle>
                        <Card.Text>
                            {this.props.todo.content}
                        </Card.Text>
                        <Card.Link href='#' onClick={() => this.props.toggleEdit(this.props.todo)}>Edit</Card.Link>
                        <Card.Link href='#' onClick={() => this.props.deleteTodo(this.props.todo)}>Delete</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Todo