import React from "react";
import {TodoContext} from '../TodoContext';
import './TodoCounter.css' // Se importa el css

 // la información la recibe de totalTodos y completed de completedTodos, y cambia cada vez que la variable todos o completedTodos
 function TodoCounter(){
    //Los dos parámetros los recibe desde TodoContext como props
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
   
    return(
        <h2 className="TodoCounter">Has completados {completedTodos} de {totalTodos} TODOS</h2>
    )
 }
 export { TodoCounter }