
import { useState } from "react";

export const IngresarTask = ({crearTarea}) => {
    const [nuevaTarea, setNuevaTarea] = useState(""); //Me permite almacenar las tareas
    const handleSubmit = (e) => {
    e.preventDefault(); //no refresca la página cuando se acciona el botón
    crearTarea(nuevaTarea); //Al dar clic en Agregar me agrega la nueva tarea
    localStorage.setItem("tareas", nuevaTarea); //Persiste la data si se cierra o se actualiza el navegador
    setNuevaTarea(""); //Limpia el input
  };
  return (
    //Envía un evento cuando se acciona el botón
    <form onSubmit={handleSubmit} > 
    
      <input
        type="text" //Se crea entrada de texto para que usuario digite la tarea
        placeholder="Ingrese nueva tarea" //Mensaje de ayuda que aparece en el cuadro
        value={nuevaTarea} //Captura el valor del estado
        onChange={(e) => setNuevaTarea(e.target.value)} // Captura el evento cuando se digita algo en el cuadro
      />
      <button>Agregar Tarea</button>
    </form>
  );
};
