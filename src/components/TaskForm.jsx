import { useState, useContext } from "react";
// Importando el contexto, voy a traer el nombre del contexto no el componente, para utilizar este contexto tengo que importar de react el "useContext"
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  // * Estado
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // ? Vamos a utilizar el useContext y lo que le vamos a pasar es el nombre del taskContext
  // useContext(TaskContext)
  // * guardalo en una variable llamada value
  // const value = useContext(TaskContext);
  // Lo podemos ver por consola es un objeto con las tareas, la funcion createTask, deleteTask
  // console.log(value);
  // * Aahora yo no quiero todos los valores, puedo destructurarlo solo quiero la funcion createTask
  const { createTask } = useContext(TaskContext);

  // * Manejador de evento submit
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    // Mejorando el aspecto del formulario, un color oscuro de fondo que se note, espaciado interno padding de 10, que se separe abajo con un margen; ahora voy a decir que los inputs esten centrados para eso todo este formulario voy a colocarlo dentro de un contenedor div con la clase, con un ancho predeterminado, y lo voy a centrar, dandole color a los inputs, padding de 3 a todos los lados, anho que abrque todo esl espacio posible, y un amgen inferior de 2 para uqe se separe, lo mismo para los dos inputs; en cuanto al boton un color indigo de fondo, espaciado interior de 3 en el eje x, paddind vertical o eje y de 1, y el texto en blanco
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        {/* Creamos un titulo al formulario con un estilo de doble estralarge, negrita y texto de color blanco, y un mergen de 3 inferior para que se separe */}
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
