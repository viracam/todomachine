import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
// import './App.css';

const defaultTodos = [
  {
    text: 'Cortar cebolla', completed: true
  },
  {
    text: 'Pesar', completed: false
  },
  {
    text: 'Llorar con la llorona', completed: false
  },
];


function App(props) {
  const[todos, setTodos ] =React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoCounter
       total={totalTodos}
       completed={completedTodos}
       />

      
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      
      
      <TodoList>
      
        {todos.map(todo =>(
          
          <TodoItem key={todo.text} text={todo.text}/>
      
        ))}
      
      </TodoList>
      
      <CreateTodoButton/>
      
      
    </React.Fragment>
  );
}

export default App;
