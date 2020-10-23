import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './containers/Signup'
import Login from './containers/Login'
import TodolistsContainer from './containers/TodolistsContainer'
import TodosContainer from './containers/TodosContainer'
import Home from './containers/Home'

class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <header className='App-header'>
          <Navigation />
        </header>
          <Router>
            <React.Fragment>
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/todolists' component={TodolistsContainer} />
              <Route exact path='/todolists/:id/todos' component={NotesContainer} />
              <Route exact path='/' component={Home} />
            </React.Fragment>
          </Router>
          <Home />
      </div>
    )
  }
}

export default App;
