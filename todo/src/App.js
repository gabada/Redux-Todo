import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addTodo, handleChange, markCompleted, removeTodo } from './actions';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputText: state.inputText,
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, {})(App);