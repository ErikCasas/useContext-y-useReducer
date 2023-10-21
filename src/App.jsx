import "./App.css";
import PokeApi from "./components/PokeApi";
import UseReducer from "./components/UseReducer";
import UseContext from "./components/UseContext";

//descomentan solo un componente para ir porbando uno por uno
//recuerden mirar casos en los que rompa el codigó para asi tener mayor entendimiento
//                       ☺

function App() {
  return (
    <>
      {/* <PokeApi /> */}
      <UseContext />
      {/* <UseReducer /> */}
    </>
  );
}

export default App;
