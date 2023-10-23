import TaskCard from "./TaskCard";
// Importando el contexto, voy a traer el nombre del contexto no el componente, para utilizar este contexto tengo que importar de react el "useContext"
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  // ? Antes del codigo, vamos a utilizar el useContext y lo que le vamos a pasar es el nombre del taskContext, y lo destructuro para utilizar del objeto solo lo que necesito en este caso el el arreglo del tareas tasks, y funcion deleteTask
  // const { tasks, deleteTask } = useContext(TaskContext);
  // ? Aunque en realidad si lo pensamos mejor, no necesito pasaele el deleteTask a TaskCard ya que el puedo acceder directamente a el a traves del contexto. asi que lo quitamos, ya no necesito pasarle el delteTask porque este sta viviendo en el contexto
  const { tasks } = useContext(TaskContext);

  // * Validando
  if (tasks.length === 0) {
    // Estilizando el mensaje con un texto blanco para que se vea, text de tamaño 4 veces extralarge, y negrita, y centrado
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }
  return (
    // Quiero que las tarjetas se coloquen uno al lado de otro comun agrilla de cuatro columnas, despues voy a darle un espacio entre columnas
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
