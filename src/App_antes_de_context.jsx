import { useEffect, useState } from "react";
// *? Ordenando los archivos, crear una carpeta "components" y poner todos nuestros componentes ahi, solo deben quedar afuera el App y el main, hay que mover y actulizar las referencias que lo hace muy bien el VisualStudioCode, ahora dentro de la carpeta components puedo agrupar cen carpetas por components por ejemplo task, user, auth lo que yo requiera para mi aplicacion, tambien puedo ordenar con una carpeta data y ahi poner el tasks.js
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  /* function createTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        descripction: "nueva tarea",
      },
    ]); 
    }*/

  // * Modificando la funcion para que reciba ahora tambien la descripcion, esperaba como parametro un string pero ahora esperara de nuevo una tarea, que sera un objeto que esta formado por dos propiedades titulo y descripcion, entonces le paso a el objeto para ser agregado al arreglo
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
  // Caracteristica "fold" para minimizar o contraer las funciones en visualstudiocode la flechita hacia abajo

  // *? Para eliminar tengo que crear una funcion que ser aejecutada en TaskCard que tiene el id del elemento a eliminar, pero psando por TaskList ver explicacion de diagrama react_04 y podemos observar esta estructura, como un arbol en la react tools del navegador
  /* function deleteTask() {
    // Por ahora va mostrar el arreglo de las tareas
    console.log(tasks);
  } */
  // Ahora le voy a pasar un id a la funcion
  function deleteTask(taskId) {
    console.log(tasks);
    // Tambien voy a ver el parametro por consola
    console.log(taskId);
    // Ya tengo el arreglo de tareas ya tengo el id ya puedo hacer ese filtro para quitarlos
    // tasks.filter(task => task.id !== taskId)
    // Esto se lee de task vas a utilizar un filter, y por cada tarea que recorras si la tarea en su propiedad id es distinto del taskId que te esta pasando
    // Esto me va a devover un nuevo arreglo, pero este arreglo ya tiene el elemento con el id proporcionado, es lo que voy  a establecerlo en el estado
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      {/* <TaskList tasks={tasks} /> */}
      {/* Ahora quien lo va ejecutar como en el diagrama de react_04 primero en el arbol de lo paso al taskList, y despues al TaskCard */}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;

// * Minuto 3:49 Hay que ordenar los componentes
