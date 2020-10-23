import React from 'react'
import TodoInput from '../components/TodoInput'
import Todos from '..components/Todos'
import EditTodoForm from "../components/EditTodoForm"
import {getTodos, deleteTodo} from '../actions/todoActions'
import {connect} from 'react-redux'
import {Container, Row, Col} from 'react-bootstrap'

class TodosContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title: '',
            content: '',
            todolistId: props.location.state.todolistId,
            isEditing: false,
            editingTodoId: ''
        }
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    toggleEdit(todo){
        this.setState({
            isEditing: !this.state.isEditing,
            editingTodoId: todo.id,
            title: todo.title,
            content: todo.content
        })
    }

    componentDidMount(){
        const id = JSON.stringify(this.state.todolistId)
        this.props.getTodos(id)
    }

    render(){
        return(
            <div>
                <header>
                    <div id='todolistHeader'>
                        {this.state.name}
                    </div>
                </header>
                <Container lg='12' className='todosPage'>
                    <Row>
                        <Col 
                        lg='4' 
                        className='todosWrapper'>
                            <Todos 
                            todosCollection={this.props.todosCollection}
                            deleteTodo={this.props.deleteTodo}
                            toggleEdit={this.toggleEdit}
                        /></Col>
                        {this.state.isEditing ?
                        <Col 
                        md='8'
                        className='todosInput'>
                            EditTodoForm todo={this.state} toggleEdit={this.toggleEdit}/></Col>
                        :
                        <Col
                        md='8'
                        className='todosInput'><TodoInput todolistId={this.state.todolistId} /></Col>
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todosCollection: state.todos
    }
}

export default connect(mapStateToProps, {getTodos, deleteTodo})(TodosContainer)