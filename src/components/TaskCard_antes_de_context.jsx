// function TaskCard({ task }) {
// Ahora tambien recibo la funcion deleteTask como un props
function TaskCard({ task, deleteTask }) {
  // Lo genial es que si creo una funcion para el boton este se va replicar para cada elemento
  function mostrarAlerta() {
    // Por ahora solo muestra una alerta en el navegador
    // alert("Eliminando...");
    // yo quiero que me muestres el id de la tarea
    alert(task.id);
    // * Como quitamos un elemento de un arreglo, hagamos un ejemplo en el navegador supongamos que tengo el arreglo const numbers = [10,99,20], supongamos que yo quiero quitar el valor 99, hay varias formas, lo que deice react es que yo puedo volver a generar un nuevo arreglo pero simplemente sin el elemento 99, la forma seria con filter que me permite volver a recorrer todos los elementos y aplicar una condicion, en la condicon puedo de cir este numero es igual a 99 en el primer elemento si es true se queda si es false se quita del arreglo: numbers.filter(n => n !== 99) este se ejecuta de la siguiente manera primeo el filter comienza en el primer elemento si 10 es distinto de 99 me da true entonces se queda, sigue con el segundo elemento si 99 es distinto de 99 me da false entences se va no se añade al arreglo, el siguiente 20 es distinto de 99 me da true entonces se queda, entonces al final solo me queda con los elementos que dieron true en la condicion
  }

  return (
    // No voy a utilzar el key aqui si no cuando use el componente
    // <div key={task.id}>
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      {/* Implementando funcion eliminar tareas */}
      {/* <button onClick={mostrarAlerta()}>Eliminar Tarea</button> */}
      {/* NO tengo que ejecutarla inmediatamente si no se ejecutara cuando hagan click en el boton por eso le quito los parentesis */}
      {/* <button onClick={mostrarAlerta}>Eliminar Tarea</button> */}
      {/* no voy a usar la tarea mostrar mensaje si no que voy a ejecutar la funcion que estoy recibiendo como props en este caso deleteTask, cada vez que hago click compruebo que estoy opteniendo el arreglo ahora si puedo eliminar pero tengo que pasarle un parametro a la funcion */}
      {/* <button onClick={deleteTask}>Eliminar Tarea</button> */}
      {/* Pasando el parametro a la funcion */}
      {/* <button onClick={deleteTask(task.id)} >Eliminar Tarea</button> */}
      {/* Si lo hago asi ni bien recargo la pagina se ejecuta la funcion, para que solo se ejecute cuando hago click tengo que quitarle los parentesis, cundo lo quito lo que se ve es como si le estuviera pasando el objeto "event" yo no quiero eso */}
      {/* <button onClick={deleteTask}>Eliminar Tarea</button> */}
      {/* Como puedo solucinarlo? esto va ejecutar una funcion primero va ejecutar una funcion anonima y esta funcion anomina va ejecutar la funcion deleteTask y aho si le puedo pasar el id que quiero en este caso la propirdad task.id */}
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
      {/* Esta es otra forma de indicar que esta funcion tan solo se va ejecutar cuando se de un click, una vez se de un click recien vas a ejecutar la funcin deleteTask */}
    </div>
  );
}

export default TaskCard;
