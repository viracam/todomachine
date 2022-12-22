import React from "react";
import './CreateTodoButton.css';
 function CreateTodoButton(props){
    const onClicKButton = (msg) =>{
        alert(msg)
    }
    return(
        <button
            className="CreateTodoButton"
            onClick={() => onClicKButton('Aqui se debe activar el boton')}
        >+
        </button>
    );

 }
 export{CreateTodoButton}