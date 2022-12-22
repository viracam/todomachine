import React from "react";
import './TodoSearch.css';

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

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }
    return(
        <input 
            className="TodoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}/>
        
    );

}
export {TodoSearch}