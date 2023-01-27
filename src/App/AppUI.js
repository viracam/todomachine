import React from "react";
// Todos los componentes que tiene el app ui
import { TodoContext } from "../TodoContext";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";

function AppUI(){
  // Envia los datos como si fuera un consumer, pero es una constante y guarda todos los props
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext);
    return(
        <React.Fragment>
      <TodoCounter />

      
      <TodoSearch/>

      <TodoList>
        {/* // son condicionales */}
        {error && <p> desesperes</p>}
        {loading && <p>Estamos cargando no desesperes</p>}
        {(!loading && !searchedTodos.lenght) && <p>Crea tu primer todo</p>}
      
      
      {// Crea un arreglo con los diferentes todos usando como componente TodoItem
      searchedTodos.map(todo =>(
        
        <TodoItem
          // Todo es el initial value que viene del Hook useLocalStorage 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          // Se actuliza al hacer clic y toma el valor de la funcion CompleteTodo en App.js
          onComplete={() => completeTodo(todo.text) }
          // igual que en complete pero con delete
          onDelete={() => deleteTodo(todo.text) }
        />
    
      ))}
    
      </TodoList>

      
      <CreateTodoButton/>
      
      
    </React.Fragment>
    );
}
// Devuelve todos los parametros de la función AppUi
export {AppUI} 