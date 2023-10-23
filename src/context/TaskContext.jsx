import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
import PropTypes from "prop-types";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  // ? Aqui seria un mejor lugar para poder almacenar y tener disponible el estado ya que podra ser accedido por todos los componentes, como en el diagrama react_11
  // * Bloque manipulando el estado
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        description: task.description,
        id: tasks.length,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  // * Listo ahora el contexto tiene el estado de las tareas, la funcion para crear la funcion para eliminar, como el diagrama react_11

  useEffect(() => {
    setTasks(data);
  }, []);
  // Este useEffect() funcionaria asi, cuando este componente TaskContext.Provider se creado, el useEfefct() se va ejecutar y va establecer las tareas

  //   * Fin bloque
  /* return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  ); */
  // * En la propiedad value voy a interpretar codigo te puedo pasar un string un numero un arreglo pero en este caso como voy a estar pasandote varias cosas te voy a pasar un objeto, con el arreglo y las funciones., No necesito nombrarlo dos veces ya que si el nombre de la propiedad es igual al valor puedo escribirlo una sola vez, 
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

// * Ya tengo el contexto con los valores, ahora simplemente tengo que utilizarlo

// * Solucion a problemas de subrayado rojo de slint, usar el nombre del componente con la propiedad propTypes igual a objeto con los siguiente elemenetos, se pone el nombre de la variable y el valor de PropTypes.node, en caso uses en los props funciones pones el nombre de la funcion y el valor PropTypes.func
TaskContextProvider.propTypes = {
  children: PropTypes.node,
};
