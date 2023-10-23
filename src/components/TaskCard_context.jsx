// * Haciendo la prueba del contexto, lo quitamos ya que solo era un ejemplo
// import TaskContext from "../context/TaskContext";
// * Quiero llamar al valor x=20 de TaskContext en TaskCard, voy a importar react y asi como tenia el createContext para crear este contexto tambien tengo useContext para poder utilizar ese contexto
// import { useContext } from "react";
// Importando el nombre del contexto, ya no el TaskContextProvider porque este es el componente solo quiero el nombre
// import { TaskContext } from "../context/TaskContext";
// Importando propd-types para solucionar el problema de subryado rojo de slint
import PropTypes from "prop-types";

function TaskCard({ task, deleteTask }) {
  //   function mostrarAlerta() {
  //     alert(task.id);
  //   }
  // *Quiero utilizar el contexto que he importado, en react se puede crear varios contextos ejemplo imagen react_09 al mimo tiempo yo luego tengo que dicidir a cual de estos tengo que llamar, en este caso tengo que indicarle un nombre es por eso que le puse un nombre al context que es la primera exportacion la del createContext que se llama TaskContext para ello hay que importarlo, ese es el que quiero utilizar
  // useContext(TaskContext);
  // Entonces ya puedo extraer el valor
  // const valor = useContext(TaskContext);
  // Por ahora voy a mostrar el valor
  // console.log(valor)
  // Lo comprobamos en la consola muestra 3 veces por los 3 componentes taskcard, pero tambien muestra doble porque el elemento del main "<React.StrictMode>" lo ejecuta de nuevo por eso se vee doble, pero esto solo es en desarrollo
  // ? Es de observar que aqui en task card no existe ninguna variable pero lo estoy lo esta trayendo gracias al context, esto es una forma de comprobar que en taskcontext vamos a almacenar todo nuestro estado y de esta forma ya nos olvidamos SI UN COMPONENTE ESTA DENTRO DE OTRO YA NO IMPORTA, si luego creo otros componentes que no tienen nada que ver con los anteriores ni siquiera estan en el arbol de componentes tambien puede acceder al contexto siempre y cuando este dentro del componente contexto ejemplo diagrama react_10

  return (
    // * Haciendo la prueba para visualizar el context, podemos visualizar el texto "Componente Context", y tambien en el arbol de componentes, en la "React Tools", pero lo quitamos ahora ya que solo era un ejemplo
    // <TaskContext>
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
    // </TaskContext>
  );
}

// * Solucion a problemas de subrayado rojo de slint, usar el nombre del componente con la propiedad propTypes igual a objeto con los siguiente elemenetos, se pone el nombre de la variable y el valor de PropTypes.node en caso de que solo se string se recomienda tipar, en caso uses en los props funciones pones el nombre de la funcion y el valor PropTypes.func, hacer coincidir el tipo que se le pasa en este caso se recibe un objeto task por eso le paso tipo object
TaskCard.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
};

export default TaskCard;
