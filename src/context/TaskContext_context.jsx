// *Aprendiendo el Context, este componente context que contiene una funcion simple, que no va retornar un div si no que va retornar un elemento que nos va permitir englobar al resto
// * No voy ausar children ni h1 esto era solo un ejemplo voy a usar un componente especial que me da React para ello lo importo
import { createContext } from "react";
// Solucinar el problema de subrayado de slint con props validation
import PropTypes from "prop-types";

// * Este createContext lo tengo que ejecutar porque es una funcion
// createContext()
// * Esta funcion me va retornar un objeto que le voy a llamar TaskContext, por ahora interperetalo como nombre del contexto
export const TaskContext = createContext();
//* Ahora ya tengo el nombre del contexto pero aun me falta crear el contenedor, el componente en react tiene un nombre especial se llama provider, poque justamente el provee de un estado al resto de componentes, al componente lo renombrare como "TaskContextProvider" que sera el componente que contiene a todos para que se diferencie del TaskContext, ok le voy a decir desde TaskContext voy a estar creando el provider y dentro voy a estar usando el props.children,

export function TaskContextProvider(props) {
  // * Creando variable de prueba, esta variable va poder ser accedida pero tenemos que gurdarlo dentro del provider dentro del componente que los contiene a todos, mediante su propiedad value y le digo vas a almacenar x
  let x = 20;
  return (
    <TaskContext.Provider value={x}>{props.children}</TaskContext.Provider>
  );
}

// ? COMO YA TODO ESTA LISTO HAY QUE IR AL MAIN el nivel mas alto para englobar a todo

/* function TaskContext(props) {
//   return (
    //* Por ahora usare un fragment y aqui le voy a decir que van a ir elementos hijos, en React podemos decir que dentro de un componente van a ir mas componentes puedo indicar que son elementos hijos y esto se hace a traves de la propiedad "children", usando el "props" y su propiedad "children" es como decirle aqui van a ir mas componentes este es una forma de entender como funciona el context lo prbare con Taskcard, ahora lo quitamos ya que solo era un ejemplo
    // Creo h1 para poder visualizar el context
    // <>
    //   <h1>Componente Context</h1>
    //   {props.children}
    // </>
//   );
} */
// * Solucion a problemas de subrayado rojo de slint, usar el nombre del componente con la propiedad propTypes igual a objeto con los siguiente elemenetos, se pone el nombre de la variable y el valor de PropTypes.node, en caso uses en los props funciones pones el nombre de la funcion y el valor PropTypes.func, tipar lo mas posible los props
TaskContextProvider.propTypes = {
  children: PropTypes.node,
};

// ! No voy a exportar por defecto, si no por individual para ssaber que es lo que estoy importando en los otros componentes con los exports en la funcion y en la variable
// export default TaskContext;
