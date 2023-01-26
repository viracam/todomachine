import React from "react";
import './TodoItem.css'; // se importa el css

 function TodoItem(props){
    // const onComplete=() =>{
    //     alert('Ya completaste el todo' + props.text);
    // };
   
    

    return(
        <li className="TodoItem">
            <span // Se recibe la propiedad que viene de appUi completeTodo
                className={`Icon Icon-check ${props.completed &&  'Icon-check--active'}`}
                onClick={props.onComplete}>
                √
            </span>
            <p 
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
                >{props.text}</p>
            <span // Se recibe la propiedad que viene de appUi deleteTodo
                className="Icon Icon-delete"
                onClick={props.onDelete}>X</span>
        </li>
    );

 }
 export{TodoItem}
