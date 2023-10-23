import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./TaskList";
// Moviendo la importacion de tareas del TaskList
import { tasks as data } from "./tasks";

function App() {
  // Incluyendo el estado donde se encuentra el arreglo de datos proveniente de TaskList
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  //   * Ok yo tengo aqui el arreglo de tareas la data se lo voy a pasar a TaskList como un prop, Ahora para que pueda añadirlo al arreglo se lo prodria pasar a TakForm pero no es asi como React funciona, lo que react me dice que para añadir algo dentro de este arreglo, lo que voy a hacer es crear una funcion en App a la que llamamos createTask y se lo pasaremos a TaskForm como la imagen react_03, la funcion va recibir como parametro un objeto y como si tiene acceso al arreglo lo copia y le agrega la nueva tarea, y loq ue voy a hacer es copiar el arreglo de tareas y agregarle la nueva tarea con sintaxis JavaScript si no entiendes esta sintaxis por ejemplo en el navegador probar "const a = [1,2,3]" con los 3 puntos le digo copia el valor de a "[...a, 4, 5, 6, 7]" y esto me retorna un nuevo arreglo con el segundo elemento agregado pero sin alterar el arreglo a.
  /* function createTask(task) {
    // [...tasks, task]
    // Una vez tenga el nuevo arreglo lo voy a asignarlo al estado
    setTasks([...tasks, task]);
  } */
  // *? Ahora aqui voy a recibir solo el titulo como string ya no voy a recibir un objeto, no puedo pasrele el Task title porque seria un arreglo de objetos concatendo con un string, dentro recien voy a definir el objeto nuevo con las demas propiedades ya que aqui si tengo acceso al arreglo, es lo mismo qu eestaba haciendo solo qu en vez de crear el objeto nuevo en el taskform lo estoy creando en App
  function createTask(taskTitle) {
    setTasks([...tasks, {
      title: taskTitle,
      // id: 4,
      id: tasks.length,
      description: 'nueva tarea'
    }])
  }
  // Podemos verificar en la herramienta rect tools, en el componente TaskList y observamos que los keys si son diferentes al hacer click en cada elemento podemos ver sus datos

  // *? Entonces de esta forma es como nosotros conectamos el componente App con el componente TaskForm() simplemente a traves de un prop
  return (
    <>
      {/* <TaskForm /> */}
      {/* Le paso la funcion al Componente TaskForm como un prop */}
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
