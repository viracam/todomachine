import React from "react";


  
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
  
  
    
  // Se persiten los datos con la funcion saveTodos, se llaman en complete y delete con la funcion de TodoProvider que se renombra a saveTodos
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

  export { useLocalStorage };
  