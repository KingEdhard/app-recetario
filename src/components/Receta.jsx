import React from "react";
import "./Receta.css";

function Receta({ nombre, imagen, ingredientes, tiempo }) {
  return (
    <li className="receta border-2 border-black m-4 p-4 grid grid-cols-2 grid-rows-3 gap-4">
      {" "}
      <h2 className="text-2xl font-bold col-span-2">{nombre}</h2>{" "}
      <p className="font-medium col-span-2">Ingredientes:</p>{" "}
      <ul className="list-disc list-inside col-span-2">
        {" "}
        {ingredientes.map((ingrediente) => (
          <li key={ingrediente}>{ingrediente}</li>
        ))}{" "}
      </ul>{" "}
      <p className="font-medium col-span-2">Tiempo de preparación: {tiempo}</p>{" "}
      <img className="w-48 h-48 object-cover" src={imagen} alt={nombre} />{" "}
    </li>
  );
}

export default Receta;
