import React from "react";
import { useLocalStorage } from "./useLocalStorage";

//El contexto tambien recibe dos propieades: Provider y Consumer
const TodoContext = React.createContext();

function TodoProvider(props){
    const{ 
        item: todos,
        saveItem: saveTodos, //El renombrado funciona para complete y delete todo
        loading,
        //useLocalStorage require dos parametros, el nombre del objeto y el arreglo, para comenzar en cero se pone un arreglo vacio en vez de defaultTodos.
        error } = useLocalStorage('TODOS_V1', defaultTodos);
  
    
    // Cuando inicia la applicación deja un string vacio que es el estado, e inicializa los dos parametros para el todo search
    const [searchValue, setSearchValue] = React.useState('');
  
  // hace un conteo de los todos completados
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    // Es el total de los todos pero en entero.
    const totalTodos = todos.length;
  
    //Inizializa el parametro de busqueda con un arreglo vacio
    let searchedTodos = [];
  
    // si la longitud NO es mayor o igual a uno 
    if(!searchValue.length >= 1){
  // los todos buscados son igual a los todos, osea el objeto TODOS_V1 con su información de defaultTodos.
      searchedTodos = todos;
    }
  //Se esta buscando algo con el todoSearch, es decir se activo SyntheticBaseEvent
    else{
      // se debe crear un nuevo array con el metodo filter que recibe un arreglo, en este caso una función llamada todo debe devolver un arreglo
      searchedTodos = todos.filter(todo =>{
        // se busca el todo y lo convierte a minúsculas para analizar
        const todoText = todo.text.toLowerCase();
        // lo que escriba el usuario tambien se convierte a minúsculas para comparar
        const searchText = searchValue.toLowerCase();
        // compara los dos valores y devuelve un arreglo contenido en la función todo
        return todoText.includes(searchText);
      
      });
      
    }
  
  // Método para completar el todo con una funcion, envía el texto del todo.
    const completeTodo = (text) =>{
      // encuentra la posición y saber cual cambiar el estado a completado
      // se examina el texto que tenga el mismo valor
      const todoIndex = todos.findIndex(todo => todo.text === text);
      // una nueva copia, con el array injectado
      const newTodos = [...todos];
      // se ingresa al index y se cambia la propiedad a true
      newTodos[todoIndex].completed = true;
      //se actuliza el estado, con un re-render en setTodos del local.
      saveTodos(newTodos);
  
      /// Ejemplo de como se cambia mostrando el objeto
      // todos[todoIndex] = {
      //   text:todo[todoIndex].text, 
      //   completed: true,
      // }
    }
    // Método para eliminar el todo con una funcion, envía el texto del todo y se repite todo al igual que en completeTodo excepto por el splice.
    const deleteTodo = (text) =>{
  
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      // elimina el elemento del array ubicandolo con el primer parametro y la cantidad de elementos con el segundo paramentro
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }
    
    return(
        //Provider: Envuelve a AppUI para usar las props y se comparten desde value
        <TodoContext.Provider value={{
            // Se llaman todos las props
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,// un arreglo del estado con su objeto que contiene a la llave, el texto, el estado y dos funciones (complete y delete)
      completeTodo, //son props hijos de TodoList que al mismo tiempo estan contenidos en todo item que contienes la prop searchedTodos
      deleteTodo,
        }}>
            {/* Envia la información en props para el cosumer */}
            {props.children}            
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};
// Consumer: si se necesita informacion del provider
<TodoContext.Consumer></TodoContext.Consumer>