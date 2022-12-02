import React from "react";
 function TodoItem(props){
    return(
        <li>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );

 }
 export{TodoItem}
