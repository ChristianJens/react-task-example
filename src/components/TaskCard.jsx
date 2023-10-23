// Importando el contexto, voy a traer el nombre del contexto no el componente, para utilizar este contexto tengo que importar de react el "useContext"
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
// Importando propd-types para solucionar el problema de subryado rojo de slint
import PropTypes from "prop-types";

function TaskCard({ task }) {
  // ? Antes del codigo, vamos a utilizar el useContext y lo que le vamos a pasar es el nombre del taskContext, y lo destructuro para utilizar del objeto solo lo que necesito en este caso el el arreglo del tareas tasks, y funcion deleteTask, el Task si se lo tienen que pasar como un props no se lo puedo pasar desde el contexto porque el TaskList lo esta recorriendo, es algo que el TaskList le esta pasando al TaskCard
  const { deleteTask } = useContext(TaskContext);
  return (
    // Tailwind.css tiene unas cuantas clases presionando con el autocompletado "ctrl + barra espaciadora" puedo generar bg-gray-800=>background de color gris, texto de color blanco, padding a la tarea, border redendoado
    // En cuanto al titulo quiero que el texto sea grande que lusca como un titulo y negrita y la primera letra en mayusacula
    // El parrafo color de tsto gris con opacidad de 500, y texto mas pequeño
    // En cuanto al boton pondremos color rojo, lugo padding horizontal es decir a los lados, padding arriba y abajo de 1, borde redondeado, que se separe de arriba margin arriba de 4, el boton no parece un boton parece una imagen voy a mejorarlo le doy una clase de tailwind.css "hover:" y va cambiar al color bg-red-400 cuando el cursor este encima del boton
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

// * Solucion a problemas de subrayado rojo de slint, usar el nombre del componente con la propiedad propTypes igual a objeto con los siguiente elemenetos, se pone el nombre de la variable y el valor de PropTypes.node en caso de que solo se string se recomienda tipar, en caso uses en los props funciones pones el nombre de la funcion y el valor PropTypes.func, hacer coincidir el tipo que se le pasa en este caso se recibe un objeto task por eso le paso tipo object
TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;

// * DESPLIGUE: Cuando hemos terminado de desarrollar vamos a cancelar la ejecucion de la aplicacion y vamos a ejecutar el comando "npm run build" esto lo que va hacer es generar nuestro proyecto para produccion y simplemente a convertido todo nuestro codigo de css a java script a archivos finales en la carpeta "dist" aqui esta todo el contenido convertido, ahora tengo que desplegar estos archivos, para desplegarlos tengo aqui archivos estaticos puedo usar cualquier servicio para desplegar archivos estaticos, incluso puedo usar un hosting compartido, en este caso usare un servicio gratuito pero tengo que concocer de git que es una herramienta para controlar versiones de codigo, gracias al servicio "github pages" podemos buscarlo asi en google, de hecho este servicio esta enfocado en publicar documentaciones pero no hay ningun problema en subir nuestras portfolios o aplicaciones generados con frameworks, ahora para subirlo primero creo un repositorio o "repo" ingresando a github con nuestra cuenta y crear nuevo repositorio con el nombre "react-task-example" puedes ponerle el nombre que quieras, puede ser publico o privado y luego le doy en el boton crear repositorio, ahora lo que tengo que hacer es subir el codigo a este repositorio de github, con el comando "git init" es para poder inicizlizar este repositorio
