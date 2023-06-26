import Header from './componentes/Header';
import { useState, useEffect } from 'react';
import { IngresarTask } from './componentes/IngresarTask';
import { TablaTareas } from './componentes/TablaTareas';
import './App.css'


function App() {

  const [itemTareas, setItemTareas] = useState([]) //Listado de tareas 
  // Función para crear la tarea y mostrarla en la tabla
  function crearTarea(nombreTarea){
    if (!itemTareas.find(tareas => tareas.name === nombreTarea))// Me valida si la tarea ya esta creada
    setItemTareas([...itemTareas, {name: nombreTarea, done: false}]) //Agrega la tarea al arreglo
  }
  const actualizarTarea = tarea => {
    setItemTareas(
    itemTareas.map(t => (t.name == tarea.name) ? {...t, done: !t.done}: t)
    );
  };
  useEffect(() => {
    let datos = localStorage.getItem('tareas') //En la variable datos almacena lo que hay en tareas
    if (datos){
      setItemTareas(JSON.parse(datos))// Valida si hay datos y los convierte a formato JS
    }
  }, [ ])
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(itemTareas)) //Se ejecuta cuando cambia el arreglo
  }, [itemTareas])// Se debe poner el arreglo que debe cambiar para que se ejecute UseEffect
  
  return (
      <div className='App'>
        <Header />
        <IngresarTask crearTarea={crearTarea}/>
        <TablaTareas tareas= {itemTareas} actualizarTarea = {actualizarTarea}/>
      </div>
  );
}
  

export default App
