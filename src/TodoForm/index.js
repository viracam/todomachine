 import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'
 function TodoForm (){
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);

    }
    const onCancel = () =>{
        //TODO
        setOpenModal(false);
    };
    const onSubmit= (event) =>{
        //TODO
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo todo</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla"
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button className="TodoForm-button TodoForm-button--add" 
                    type="submit"
                    onClick={onSubmit}
                >
                    Añadir Todo
                </button>
            </div>
        </form>
    )
 }

 export {TodoForm}