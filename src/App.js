import React, { useState } from "react";
import ListaRecetas from "./components/ListaRecetas";
import NuevaReceta from "./components/NuevaReceta";
import "babel-polyfill";

function AppContainer() {
  const [recetas, setRecetas] = useState(
    JSON.parse(localStorage.getItem("recetas")) || []
  );

  return <App recetas={recetas} setRecetas={setRecetas} />;
}

function App({ recetas, setRecetas }) {
  function agregarReceta(nuevaReceta) {
    setRecetas((recetas) => [...recetas, nuevaReceta]);
    localStorage.setItem("recetas", JSON.stringify([...recetas, nuevaReceta]));
  }

  return (
    <div>
      {" "}
      <h1>Recetario</h1> <NuevaReceta onAgregarReceta={agregarReceta} />{" "}
      <ListaRecetas recetas={recetas} />{" "}
    </div>
  );
}
export default AppContainer;
