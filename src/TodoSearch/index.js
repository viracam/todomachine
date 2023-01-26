import React from "react";
import './TodoSearch.css'; // se importa el css
//Ejemplo de como se hacían Antiguamente los componentes de react con clases
// class Componente extends React.Component{
//     constructor(){
//         this.state ={
//             patito: 'Juan'
//         };
//     }
//     render(){
//         return (<div onClick={() => this.setState('Enrrique')}>{this.state.patito}</div>)
//     }
// }

function TodoSearch ({searchValue, setSearchValue}){
    /// Es el nombre de la variable para el SyntheticBaseEvent, y ademas contiene la función para actualizar el arreglo
    const onSearchValueChange = (
        // guarda como parametro el valor que el usuario escribe en el input
        event) =>{
        console.log(
            // es la posición exacta del string
            event.target.value);
            // el método que actualiza el arreglo
        setSearchValue(event.target.value)
    }
    return(
        <input 
            className="TodoSearch"
            placeholder="Cebolla"
            value={searchValue}
            //activa la funcion de SylntheticBaseEvent 
            onChange={onSearchValueChange}/>
        
    );

}
// Exporta dos valores de la funcion el valor y el que cambia para la búsqueda
export {TodoSearch}