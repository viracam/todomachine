import React from "react";
// Todos los componentes que tiene el app ui
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";

function AppUI({
      loading,
      error,
      totalTodos,
      completedTodo, //Envia el identificardor con todo.text cuando se hace clic en todoItem
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo, // Envia el identificador, a todoItem con todotext
}

){
    return(
        <React.Fragment>
      <TodoCounter
       total={totalTodos}
       completed={completedTodo}
       />

      
      <TodoSearch
        // La información se captura desde el componente todoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      
      {/* Depediendo del estado mostrará el mesaje */}
      <TodoList>
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