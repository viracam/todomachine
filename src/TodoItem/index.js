import React from "react";
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css'; // se importa el css

 function TodoItem(props){
    // const onComplete=() =>{
    //     alert('Ya completaste el todo' + props.text);
    // };
   
    

    return(
        <li className="TodoItem">
            <CompleteIcon // Se recibe la propiedad que viene de CompleteIcon
                completed={props.completed}
                onClick={props.onComplete}
                
           />
            <p 
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
                >{props.text}</p>
                  <DeleteIcon
                        onDelete={props.onDelete}
                    />
        </li>
    );

 }
 export{TodoItem}
