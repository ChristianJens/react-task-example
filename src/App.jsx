// * Aprndiendo el useContext, hasta el momento el taskForm recibe la funcion crateTask como un props, lo mismo con TaskList que recibe como props el arreglo task y la funcion deleteTask que a su vez se lo pasa a TaskCard, como un props la duncin deleteTask.
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  // * Ahora App ya esta limpio, App ya no necestia pasarle la funcion "crateTask" al TaskForm porque las funcines y el arreglo ya se encuentran arriba de todo, tampoco el "tasks" tampoco el "deleteTask" porque ahora esta disponible desde el context entonces lo quitamos
  return (
    // Esta muy pegado a los lados, voy a ponerle una etiqueta main, seccion o div en este caso sera un main, y vamos a colocarle un color oscuro para visualizarlo, y para que abrque todo el alto de la pantalla, lo siguiente es decirle que los elementos van a estar dentro de un contenedor en este caso un div con la clase container y color amarillo "bg-yellow-400" para visualizarlo, le doy margen automaticon en el eje x para centrarlo y despues ya puedo quitar el color de fondo, el contendor no debe estar pegado arriba le doy un passing de 10 a todos los lados
    // <>
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
    // </>
  );
}

export default App;
