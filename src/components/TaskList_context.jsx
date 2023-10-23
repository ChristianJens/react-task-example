import TaskCard from "./TaskCard";
// Importando propd-types para solucionar el problema de subryado rojo de slint
import PropTypes from "prop-types";

// function TaskList({ tasks }) {
// Ahora tambien estas recibiendo la funcio como props para elminar la tarea
function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  return (
    // Separando el componente en subcomponente, para ello creo el componente TaskCard
    <div>
      {tasks.map((task) => (
        // Agregamos el key en la llamada al componente TaskCard
        // <TaskCard key={task.id} task={task} />
        // Pero aqui tampoco tengo un interfaz para ejecutarlo asi que lo paso en un prop a taskcard, tambien le puedo pasar con otro nombre por ejemplo eliminarTarea y en taskCard usaria el nombre elminarTarea "eliminarTarea={deleteTask}", pero por lo general se usa el mismo nombre de la funcion
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

// * Solucion a problemas de subrayado rojo de slint, usar el nombre del componente con la propiedad propTypes igual a objeto con los siguiente elemenetos, se pone el nombre de la variable y el valor de PropTypes.node, en caso uses en los props funciones pones el nombre de la funcion y el valor PropTypes.func, se recomienda tipar lo mas posible los props
TaskList.propTypes = {
  tasks: PropTypes.node,
  deleteTask: PropTypes.func,
};

export default TaskList;