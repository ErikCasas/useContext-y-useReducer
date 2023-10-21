import React, { useEffect, useState } from "react";

const PokeApi = () => {


  const [lista, setLista] = useState([]);

/*
usamos el hook useEffect para que cuando el componente se monte 
este haga un llamado a la API y nos guarde el array de pokemones de forma local 
usando el useState 
*/

  useEffect(() => {
    //hacemos el llamado con fetch
    fetch("https://pokeapi.co/api/v2/pokemon/")
    //la respuestas del fetech la pasamos js, porque viene en formato .json
      .then((res) => res.json())
    //y esos datos accedemos a results y lo seteamos en el estado local "setLista"
      .then((dato) => setLista(dato.results));
  }, []);

  /*iteramos la lista en donde ya guardamos todos los pokemones con un map
  para entender mas sobre el metodo map leer ==> https://developer.mozilla.org/es/

  IMPORTANTE: casa vez que hacemos un renderizado de varios elementos no 
  olvidar el uso de "key" y este debe ser un valor unico para cada elemento,
  en este caso, es la posicion de cada elmento en el array  
  */
  return (
    <div>
      <h1>pokemones</h1>
      <ul>
        {lista.map((e, i) => (
          <li key={i}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokeApi;
