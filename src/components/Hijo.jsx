import React, { useContext } from "react";
import Nieto from "./Nieto";
import { MyContext } from "../context/MyContext";

const Hijo = () => {
  const { sum,res } = useContext(MyContext);
  return (
    <div>
      <button onClick={() => sum()}>SUMAR</button>
      <button onClick={() => res()}>restar</button>

      <Nieto />
    </div>
  );
};

export default Hijo;
