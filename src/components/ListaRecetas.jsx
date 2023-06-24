import React from "react";
import Receta from "./Receta";

function ListaRecetas({ recetas }) {
  return (
    <ul className="flex flex-wrap justify-center">
      {" "}
      {recetas.map((receta) => (
        <Receta
          key={receta.nombre}
          nombre={receta.nombre}
          imagen={receta.imagen}
          ingredientes={receta.ingredientes}
          tiempo={receta.tiempo}
        />
      ))}{" "}
    </ul>
  );
}

export default ListaRecetas;
