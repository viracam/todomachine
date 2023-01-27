import React from "react";
import './CreateTodoButton.css';
 function CreateTodoButton(props){
    const onClicKButton = () =>{
        //Prepstate devuelve el estado anterior a la actulización( osea click para este caso)
        props.setOpenModal(prevState => !prevState);
    }
    return(
        <button
            className="CreateTodoButton"
            onClick={onClicKButton}
        >+
        </button>
    );

 }
 export{CreateTodoButton}