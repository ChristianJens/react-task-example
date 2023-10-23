import { useState } from "react";
// * Usando en contexto en taskform
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
// Importando propd-types para solucionar el problema de subryado rojo de slint
import PropTypes from 'prop-types'

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  // Donde guardo lo que el usuario escriba aqui, creo otro estado para este dato
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // createTask(title);
    // Por ahora voy a ver por consola
    // console.log(title, description);
    // Ahora ya no solo voy a pasarte un string si no te voy a pasar un objeto con el titulo y la descripcion
    createTask({
      title,
      description,
    });
    // Reiniciando los estados
    setTitle("");
    setDescription("");
    // Pero los inputs no reflejan el valor bacio de los estados, el input se quedo con el valor
  };
  // * Usando el contexto
  const valor = useContext(TaskContext);
  console.log(valor);
  // Comprobando aparece el valor dos veces porque el useEffect() del App lo vueve a cargar despues para cargar las tareas es por eso que lo veo dos veces puedo comentarlo y se mostrara una sola vez

  return (
    // Quiero que cuando se guarde los datos, se bacie los inputs del formulario, entonces en el evento submit que ejecuta la funcion handleSubmit asi como actulizo el valor tambien lo puedo igualar a bacio
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        // Solucionando que se quda con el valor a pesar de que el estado a cambiado quiero que el valor represente el estado, esto no va interferir con el anterior funcionamiento porque el estado tambien va reflejando el cambio del title
        value={title}
        // Quiero que cuando cargue la pagina el cursor se ubique en este input para facilitar el llenado rapido de datos
        autoFocus
      />
      {/* Añadiendo un textarea a la descripcion */}
      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        // Solucionando que se quda con el valor a pesar de que el estado a cambiado quiero que el valor represente el estado
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

// * Solucion a problemas de subrayado rojo de slint, usar el nombre del componente con la propiedad propTypes igual a objeto con los siguiente elemenetos, se pone el nombre de la variable y el valor de PropTypes.node, en caso uses en los props funciones pones el nombre de la funcion y el valor PropTypes.func, se recomienda tipar lo mas posible los valores
TaskForm.propTypes = {
  createTask: PropTypes.node
}

export default TaskForm;
