import React from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer'

class App extends React.Component {
  render(){
    return (
      <div className='container'>
        <div className='header'>
          <h1>To Do List</h1>
        </div>
          <TodosContainer />
      </div>
    )
  }
}

export default App;
