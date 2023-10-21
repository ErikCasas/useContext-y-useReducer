import React from "react";
import ContextCompo from "../context/ContextCompo";

const UseContext = () => {
  /**
  Como vimnos en "ContextCompo" este se hizo de tal modo 
  de que pueda envolver todo, pero no interfiere con su renderizado
  de este modo, ahora todos los componentes hijos tendran acceso
  a los valores que le hemos pasodo por medio del contexto,
  sin necesidad de pasarlospor props entre componentes, es decir 
  que ya no necesitamos realizar este tipo de acciones
  
  <ComponentePadre>
    <Hijo valor = {valorQueUsaraElComponenteNietoYNoElHijo}/>
  </ComponentePadre>
  
  */
  return (
    <div>
      <ContextCompo>
        <Hijo />
      </ContextCompo>
    </div>
  );
};

export default UseContext;
