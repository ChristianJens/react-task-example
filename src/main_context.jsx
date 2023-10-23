import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Importando el contexto, puedo traer las dos importaciones por indivial que hice, el TaskContextProvider es el que renderiza un componente de jsx y lo colocaremos como contenedor del App, en el arbol de componentes de la utilidad react tools puedo observar que todo mi aplicacion esta dentro de un TaskContextProvider debajo esta el contexto "Context.Provider" al final se ahan creado dos elementos pero hay que considerarlo como uno, pero hay que observar que es igual al diagrama react_07, entonces ya tenemos un componente que engloba a todos. Por ahora haremos una prueba el TaskContext por ahora no tiene el arreglo el arreglo lo tiene App,pero voy a crear una variable que se va llamar x = 20 como en la imagen react_08
import { TaskContextProvider } from "./context/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Lo distinto es "<React.StrictMode>" ya que cuando estamos trabajando con react es recomendable usar esta etiqueta, que lo que significa es que se va ejecutar un codigo adicional en desarrollo para saber si estas escribiendo codigo correcto en react es una especie de recomendacines que te va dando el propio entorno de desarrollo para que puedas corregir algunos errores, es bastante util y es una buena paractica dejarlo alli
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
