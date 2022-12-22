import React from "react";
import './TodoCounter.css'


 function TodoCounter(total, completed){
   
    return(
        <h2 className="TodoCounter">Has completados {completed} de {total} TODOS</h2>
    )
 }
 export { TodoCounter }