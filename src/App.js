import React from "react";
// import './App.css';

const todos = [
  {
    text: 'Cortar cebolla', completed: false
  },
  {
    text: 'Pesar', completed: false
  },
  {
    text: 'Llorar con la llorona', completed: false
  },
];


function App(props) {
  return (
    <React.Fragment>
      {/*<TodoCounter/>*/}
      <h2>Has completados 2 de 3 TODOS</h2>
      {/*
      <TodoSearch />
      */}
      <input placeholder="Cebolla"/>
      {/*
      <TodoList>
      S
        {todos.map(todo =>(
          
          <TodoItem/>
      
        ))}
      
      </TodoList>
      */}
      {/*
      <CreateTodoButton/>
      */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
