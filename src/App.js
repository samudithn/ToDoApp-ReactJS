import React, { Component } from 'react';
import ToDo from './ToDo';
import NewToDo from './NewToDo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Play games'},
      {id: 2, content: 'Read Books'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">To Do's</h1>
        <ToDo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <NewToDo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;