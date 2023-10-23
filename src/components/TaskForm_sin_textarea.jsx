// Componente que mostrara el formulario,
// paraa guardarlo en un estado hago las importaciones de useState
import { useState } from "react";

// function TaskForm() {
// * Ahora en TaskForm estoy recibiendo la funcion para agregar el task al arreglo
function TaskForm({ createTask }) {
  // Voya a agregar el titulo de la tarea creo el estado, esto es equivalente a decir "const title = '';"
  const [title, setTitle] = useState("");
  

  // Voy a llamar a esta funcion "handleSubmit" como diciendole maneja el Submit del formulario
  /* const handleSubmit = () => {
    // Quiero ver por consola lo que tenga el titulo hasta este momento
    console.log(title);
  }; */
  // para corregirlo desactivare el comportamiento por defecto reciviendo el objeto event
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
    // Como por ahora solo tengo el titulo y necesito un objeto task con la forma de titulo y descripcion voy a crear un nuevo objeto
    /* const newTask = {
      title,
      // Agrgando por ahora informacion en duro, para que no salag error de key
      id: 4,
      description: 'Algo nuevo'
    }; */
    // Por ahora muestro por consola el newTask
    // console.log(newTask);
    // En lugar de ver por consola el titulo lo voy a añadir al arreglo
    // createTask(newTask);
    // Todos los nuevo archivos tendrian el id 4 lo que causa un error de key, tendria que usar la longitud del arreglo pero yo no tengo acceso al arreglo en este componente TaskForm, entnces solo tengo que recibir el titulo como texto en el componente App, lo unico que le va pasar es el titulo elimino el newTask y solo le paso a la funcion el titulo
    createTask(title);
  };
  // * Ahora como hago para añadirlo al arreglo de tareas? hay que comprender que en este componente no existe el arreglo de tareas, tan solo esta en el componente TaskList.jsx entonces comprenderemos con el diagrama react_01 hast ahora tenemos 3 componentes App, TaskForm y TaskList tambien tenemos main pero este inicia todo asi que no lo vamos a contar main llama a App y App llama a TaskForm y TaskList, lo que estamos viendo es una arbol de componentes o "Components UI Tree", lo que tenemos que hacer es subir este arreglo un nivel es decirle que el que va tener el arreglo va a ser App como en el diagrama react_02

  return (
    // <div>
    // <form>
    // Ya que veo que el valor que escribe se va actulizando en el estado, a partir de aqui lo que voy a hacer es cuando se ejecute el formulario voy a leer este valor para eso usare el manejador de evento eventHandller con el evento onSubmit del formulario, cuando se ejecute el onSubmit voy a ejecutar la funcion "handleSubmit" que la escribo por aparte para tener mas orden, cuando lo pruebo se puede observar el texto por consola pero desaparece devido al comportamiento por defecto del form reninicia el navegador
    <form onSubmit={handleSubmit}>
      {/* cuando yo escriba en el input voy a tratar de capturarlo */}
      {/* <input
        placeholder="Escribe tu tarea"
        onChange={function (e) {
          console.log(e.target.value);
        }} /> */}
      {/* Puedo resumir el codigo */}
      <input
        placeholder="Escribe tu tarea"
        // onChange={(e) => console.log(e.target.value)}
        // Haora voy a guardar el valor en un estado
        // En ves de mostrarlo por consola vas estar asignandolo a la variable, para actulizar o asignar a la variable se usa la segunda funcion del estado, el setTitle()
        onChange={(e) => setTitle(e.target.value)}
        // Si yo quiero comprobar este valor puedo ir a las herramientas de react en el componente TaskForm y ver el estado
      />
      <button>Guardar</button>
    </form>
    /* No es necesrio que este dentro de un div la etiqueta formulario ya lo contiene entonces puedo quitar el div */
    // </div> */
  );
}

export default TaskForm;
