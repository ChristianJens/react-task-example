// Voy a crear un componente dentro "src" que se va a llamar TaskList al cual voy a llamar, recordar que en vite si es obligatorio usar la extension .jsx
// usando la extension puedo escribir "imp" me da porsion de codigo lista para importar
// Voy a crear un formulario para ello creare un componete llamado TaskFomr.jsx
import TaskForm from "./components/TaskForm";
import TaskList from "./TaskList";

function App() {
  return (
    // Aca no es necesario que use un div puede ser un fragament <></> y al final es para cumplir con la reglas de react
    // <div>
    <>
      <TaskForm />
      {/* NOTA: cuando escribi la etiqueta me dio la opcion de <TaskForm y al darle enter hizo la importacion en automatico */}
      <TaskList />
    </>
    // </div>
  );
}

export default App;
