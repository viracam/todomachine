import React from "react";
import {AppUI} from "./AppUI"; //Trae el UI
// import './App.css';

const defaultTodos = [
  {
    text: 'Cortar cebolla', completed: true,
  },
  {
    text: 'Pesar', completed: true,
  },
  {
    text: 'Llorar con la llorona', completed: false,
  },
  {
    text: 'Llorar', completed: false,
  },
  {
    text: 'la llorona', completed: false,
  },
];

// Es un hook propio de react que usa localStroage y debe tener 'use' para persistir los datos (solo recibe texto) y tiene el objeto initalValue y maneja los datos. No solo envia el arreglo, también envía el item.
function useLocalStorage(itemName, initialValue){
  // Se simulan los estados de carga  y sus correspondientes actulizadores
  const[error, setError] = React.useState(false);
  // es verdadero porque se esta cargado
  const[loading, setLoading] = React.useState(true);
  //Da el texto y EL ESTADO!! de cada todo
  const[item, setItem ] = React.useState(initialValue);
  
// Es un hook que Maneja los Efectos: pueden ser de error, cargando o cargado, se ejecuta justo antes de hacer el render
  React.useEffect(() => {
    // simula el tiempo de carga, el primer parametro es una funcion y el segundo el tiempo
    setTimeout(() => {
      // los estados de error funcionan con try y catch
      try{ 
        // usa local storage para obtener el algun elemento del hook use localStorage con la variable itemName
        const localStorageItem = localStorage.getItem(itemName);

        //Para saber si el usuario usó la aplicación con elementos parseados
        let parsedItem;
      // Si no existen elementos en el localStorage
        if(!localStorageItem){
          // se crea un por defecto del array, el arreglo vacio se remplazó por el initialvalue
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          // Debe ser  un arreglo vacio
          parsedItem = initialValue;
        }
        // ya tiene algun todo
        else{
          // se va a transformar en un array
          parsedItem = JSON.parse(localStorageItem);
        }
        //Actualiza con la informacion del localStorage contenida en parsedItem
        setItem(parsedItem);
        // Se cargo todo completamente y actualiza el estado de carga
        setLoading(false);
      } catch(error){
        // si encuentra un error actualiza el estado que viene de APPUI PROS, Todolist
        setError(error)
      }
    }, 1000)
  });


  
// Se persiten los datos con la funcion saveTodos, se llaman en complete y delete con la funcion de app que se renombra a saveTodos
  const saveItem = (newItem) =>{
    try{
      // se convierte en un string todos los nuevos items
      const stringifiedItem = JSON.stringify(newItem);
      // se crea un nuevo array con la variable itemname y su array en string parametro que está en uselocalStorage
      localStorage.setItem(itemName, stringifiedItem);
      // Para que al recargar la pagina el nuevo item se mantega
      setItem(newItem);
    } catch(error){
      setError(error);
    }
    
  };

  return {
    item, //lo retorna en useLocalStorage
    saveItem, //los retorna en useLocalStorage y los usan en la funcion saveTodos()
    loading,
    error,
};


}

function App() {
  
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
  
  return ( 
    <AppUI // Se llaman todos las props
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos} // un arreglo del estado con su objeto que contiene a la llave, el texto, el estado y dos funciones (complete y delete)
      completeTodo={completeTodo} //son props hijos de TodoList que al mismo tiempo estan contenidos en todo item que contienes la prop searchedTodos
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
