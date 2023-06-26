export const FilaTareas = ({tarea, actualizarTarea}) => {
  return (
        <tr>
            <td>
                {tarea.name}
                <input
                type="checkbox"
                checked={tarea.done}
                onChange={() => actualizarTarea(tarea)}
                />
            </td>
        </tr>
  );
};
