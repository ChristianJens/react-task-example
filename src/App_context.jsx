// * En esta seccion aprenderemos el createContext, de la forma anterior teniamos estamos haciendo un codigo que nos esta dando un poco de problemas, que tal vez sea un poco de dificil de entenderlo al inicio, y son estas funciones que estoy creando en App, cuando tengo que crear algo tengo que pasarle la funcion "createTask" desde App al TaskForm, y lo mismo con la funcion "deleteTask" desde App le paso la funcion al componente TaskList y como el no lo usa lo tiene que pasar al TaskCard, ahora que pasa si uno de estos TaskCard tuviera otro componente por ejemplo el boton como subcomponente de TaskCard, entonces tendria que pasar la funcion de App a TaskList luego a TaskCard y luego TaskButton, si te das cuenta ya estamos teniendo bastante problemas, si creamos una interfaz compleja imagenete con cientos de componentes uno dentro de otro esto es inmantenible, de hecho a este concepto de pasar un prop dentro de otro se le conoce como "PROPDRILING", te estoy pasando una funcion tu tienes que utilizarla se lo pasas a su hijo, se lo pasas a su hijo y asi sucesivamente, ahora si yo modifico en una tengo qu estar modificarla en todas las que estan decendiendo, ahora el problema viene justamente porque nosotros tenemos un componente que es dueño del estado que es App si nosotros lo pensamos la razon que estamos creando estas funciones es porque App es el que contiene el estado es decir el arreglo de las tareas, entonces justamente necedito funcines que permiten interactuar con este estado, es por eso como este es dueño del estado tengo que compartir con los demas componentes para tener una especie de funcionalidad, una mejor forma seria si en lugar que todos los componentes en lugar de estar esperando que le pasen una funcion, porque no mejor cambiamos la flecha y hacemos que el taskCard siempre acceda a un estado como el diagrama react_05, si este requiere de algo va directamente al estado, y todos los componetes que requieran algo van directamente al estado, entonces haremos eso App ya no va a poseer el estado si no crearemos otro componente, este componente que va a contener a todos incluso al App se va llamar contexto, entonces este contexto es el que va almacenar el estado ya no App, react ahora nos da una nueva forma de traer los datos sin estar pasandolo entre componentes, y es que nos dice que ahora desde TaskCard puedes acceder directamente a este contexto, desde TaskList puedes acceder diractamente a este conetexto y asi con los demas componentes o subcomponentes como en el diagrama react_06, porque ahora todos estan dentro de ese componente grande pues ahora todos pueden acceder a los datos o al estado, esta es una mejor forma de poder compartir un estado con todos los componentes.
// * Para ello creamos el contexto lo que React llama API Context justo sirve para añadir un contexto de todos los componentes, entonces creo una carpeta llamada "context" para tener un poco mas de orden y dentro el archivo o componente como va contener tareas lo nombrare "TaskContext" pero puedes llamarlo de acualquier forma.

import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { tasks as data } from "./data/tasks";

function App() {
  // *? Todo es te bloque corresponde a la manipulacion del estado
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

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
  //   *? Fin del bloque de manipulacion de estado

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
