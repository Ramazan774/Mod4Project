import React from 'react'
import Todolist from './Todolist'
import {Container, Row, Col} from 'react-bootstrap'

class Todolists extends React.Component {
    render(){
        const renderTodolists = this.props.todolistsList.map(todolist => 
            <Todolist 
            key={todolist.id} 
            todolist={todolist}
            deleteTodolist={this.props.deleteTodolist}
            toggleEditButton={this.props.toggleEditButton}
            />)

            return(
                <div className='table'>
                    <Container>
                        <Row className='tableLabels'>
                            <Col md='2'><strong>ID</strong></Col>
                            <Col md='4'><strong>Name</strong></Col>
                            <Col md='2'><strong>Posted</strong></Col>
                            <Col md='2'><strong>Created By</strong></Col>
                            <Col md='2'><strong>Actions</strong></Col>
                        </Row>
                    </Container>
                    {renderTodolists}
                </div>
            )
    }
}

export default Todolists