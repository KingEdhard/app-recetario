import React, { useState } from "react";

function NuevaReceta({ onAgregarReceta }) {
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [tiempo, setTiempo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const nuevaReceta = {
      nombre,
      imagen,
      ingredientes: ingredientes.split(","),
      tiempo,
    };
    onAgregarReceta(nuevaReceta);
    setNombre("");
    setImagen("");
    setIngredientes("");
    setTiempo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:{" "}
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <label>
        Imagen:{" "}
        <input
          type="text"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
      </label>
      <label>
        Ingredientes (separados por comas):{" "}
        <input
          type="text"
          value={ingredientes}
          onChange={(e) => setIngredientes(e.target.value)}
        />
      </label>
      <label>
        Tiempo de preparación:{" "}
        <input
          type="text"
          value={tiempo}
          onChange={(e) => setTiempo(e.target.value)}
        />
      </label>
      <button type="submit">Agregar receta</button>
    </form>
  );
}

export default NuevaReceta;
