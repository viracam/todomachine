import React from "react";
import './TodoList.css'; // se importa el css

 function TodoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );

 }
 export{TodoList}
