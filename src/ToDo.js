import React from 'react';

const ToDo = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
      todos.map(todo => {
        return (
          <div className="collection-item" key={todo.id}>
            <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
          </div>
        )
      })
    ) : (
        //added new comment
      <p className="center">No To Do's left well user..</p>
    );
  
    return (
      <div className="todos collection">
        {todoList}
      </div>
    )
  }
  
  export default ToDo;
