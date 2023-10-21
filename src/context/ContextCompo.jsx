import React, { useState } from "react";
import { MyContext } from "./MyContext";
import useCounter from "../hooks/useCounter";

//la prop children es una prop que renderiza los componentes que
//este componente envuelva, Y DEBEMOS ENVOLVER TODOS LOS COMPONENTES ;)
const ContextCompo = ({ children }) => {
  const [value, sum, res, rei] = useCounter();

   /**
  usamos MyContext el cual creamos en MyContext.js
  y decimos que ese contexto va a proveér algo haciendo <MyContext.Provider>
  luego le decimos con que valores va a probeer a sus hijos:
  
  <MyContext.Provider value={"valores!!"}>
   */
  return (
    <MyContext.Provider value={{ value, sum, res, rei }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextCompo;
