import React, { useReducer } from "react";

const UseReducer = () => {
  /**
creamos una función la cual podra administar las diferentes formas en 
las que manejaremos el o los distintos estados iniciales, esta función 
debe recibir el estado y la acción
*/

  function reducer(state, action) {
    /*
  al hacer un dispatch indicamos de que tipo es, aquí
  es donde leemos ese tipo y decidimos que hacer 
  */
    switch (action.type) {
      case "INCREMENTAR":
        return { count: state.count + 1 };
      case "DECREMENTAR":
        return { count: state.count - 1 };
      case "REINICIAR":
        return { count: 0 };
      default:
        throw new Error("Esto no es lo que epsraba :(");
    }
  }

  //   if (action.type === "INCREMENTAR") {
  //     return { count: state.count + 1 };
  //   }
  //   if (action.type === "DECREMENTAR") {
  //     return { count: state.count - 1 };
  //   }
  //   if (action.type === "REINICIAR") {
  //     return { count: 0 };
  //   } else {
  //     return "ALGO SALIO MAL";
  //   }
  /**
  useReducer al igual que useState nos retorna un array 
  en donde el primer valor "state" es o son los valores actuales 
  en el estado y el segundo valor "dispatch" es una función con la
  que podemos manipular los valores a traves del reducer 

  const [state, dispatch] = useReducer(reducer, estado-inicial);
  el estado inicial puede ser desde un valor primitivo como un 0
  hasta un objeto complejo 
  */

  const initial = { count: 0 };

  //     estado funcion
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <>
      <h4>useReducer :D</h4>
      <h3>el contador esta en: {state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>
        Icrementar
      </button>
      <button onClick={() => dispatch({ type: "DECREMENTAR" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "REINICIAR" })}>Reiniciar</button>
    </>
  );
};

export default UseReducer;
