import React from "react";
import './TodoCounter.css' // Se importa el css

 // la información la recibe de totalTodos y completed de completedTodos, y cambia cada vez que la variable todos o completedTodos
 function TodoCounter({total, completed}){
   
    return(
        <h2 className="TodoCounter">Has completados {completed} de {total} TODOS</h2>
    )
 }
 export { TodoCounter }