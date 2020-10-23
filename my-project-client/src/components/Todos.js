import React from 'react'
import Todo from './Todo'

class Todos extends React.Component {
    render(){
        const renderTodos = this.props.todosCollection.map(todo => 
            <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={this.props.deleteTodo}
            toggleEdit={this.props.toggleEdit}
        />)

        return (
            <div>
                {renderTodos}
            </div>
        )
    }
}

export default Todos