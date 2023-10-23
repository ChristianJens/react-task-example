// voy a importar desde el archivo task, usando la extension "imp" lo estoy importando llaves porque en el archivo no estoy haciendo un export default si no es solo un export
// Cambiando de nombre a la variable con un alias
import { tasks as data } from "./task";
import { useState, useEffect } from "react";

// mostrando por consola uso la extendion "clg", si no aparece escribe clg y presiona "ctrl + barraespaciadora"
// console.log(tasks);
// * Quiero mostrar estos datos en pantalla, para hacer eso yo tengo que guardarlo en un estado
// Usando "rfce" la extension crea el componente con el nombre del archivo
function TaskList() {

  // * IMPORTANTE: para llevar el arreglo de datos al Componente App y de ahi poder compartirlo con el componente TaskForm y TaskList lo voy a cortar y llevarlo a App

  // creamos un useState con la extension "useStateSnippet" puedo poner el nombre de la variable y al presionar la tecla "tab" se cambia con el camelcase, y le digo que inicialmente esto va ser un arreglo vacio, es como decir "const tasks = []"
  //   const [tasks, setTasks] = useState([]);
  //   En lugar del arreglo vacio, toma el valor de task o la lista de objetos
  //   const [tasks, setTasks] = useState(tasks2);
  //   Volviendo a poner al inicio el arreglo bacio
  const [tasks, setTasks] = useState([]);

  // Nos da un error que el acceso a task no esta disponible antes de su inicializacion, lo que debo hacer es asignarle un arreglo bacio, y un vez que cargue el componente asignarle estas tareas, esa idea de cuando cargue el componente viene del useEffect entonces lo utilizo
  // ejecuto el useEffect() y dentro una funcion simplemente, y como segundo parametro con un arreglo bacio para decirle que esto se va a ejecutar una sola vez cuando se cargue el componente
  useEffect(() => {
    // Cuando cargue lo unco que vas hacer es establecer en este arreglo de tareas este valor, ojo usar nombres difrentes de variables porque ahi me dio error de que el Hook a perdido la dependencia, en consola ya no da ningun error pero en la aplicacion nomuestra nada, esto es un tema bastante comun
    // setTasks(tasks);
    // Con los nombres aqui le esta volviendo a asignar el arreglo bacio setTasks([])
    // Ahora le asigno el valor del alias data que es lo que estoy trayendo de la importacion
    setTasks(data);
  }, []);



  //   Validando si hay tareas
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {/* Recorriendo el arreglo */}
      {tasks.map((task) => (
        // <div>tarea</div>
        // Ahora quiero ver los datos, y añadiendo el key igual a la tarea en su propiedad id
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

// Creare datos dentro de mi propia aplicacion creando un archivo task.json o task.js aqui podemos observar la diferencia de cuando utilizar .js cuando dentro uso solo codigo javascript y uso .jsx cuando creo dentro una interfaz de jsx o componente
