// function TaskList(props) {
// Puedo destrucuturar
function TaskList({tasks}) {
  //   if (props.tasks.length === 0) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  return (
    <div>
      {/* {props.tasks.map((task) => { */}
      {tasks.map((task) => 
      <div key={task.id}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>)}
    </div>
  );
}

export default TaskList;
