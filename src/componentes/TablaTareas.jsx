import { FilaTareas } from "./FilaTareas"
export const TablaTareas = ({ tareas, actualizarTarea }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>
      <tbody>
        {
          //Recorre el arreglo que por cada tarea me devuelva el nombre
          tareas.map((tarea) => (
            <FilaTareas tarea = {tarea} key={tarea.name} actualizarTarea = {actualizarTarea}/>
          ))
        }
      </tbody>
    </table>
  )
}
