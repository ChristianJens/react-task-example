// * En Vite no es opcional si es requerido la extension .jsx  para crear componentes de react, esto nos permitira diferenciar cuando estemos trabajando con componentes de react y cuando solo estemos trabajando con JavaScript, este es el Componente Inicial, borraremos to el contenido generado.

// creare un componente basico App que simplemente retornara un h1
function App() {
  return <h1>Hola Mundo</h1>;
}

// Lo tengo que exportar
export default App;

// * usando la extension ES7 escribo "rfce" para crear un componente y exportarlo, y crea todo el codigo y podemos la linea d eimportacion de react eso funciona para versiones anteriores de react



// Borrare el archivo App.css y limpiare el index.css para quitar todos los estilos, en la carpeta assets pondre svgs, imagenes o logotipos, el main.js es el equivalente al index.js de create-react-app 
// El archivo index.html no esta en la carpeta public no hay problema, nosotros solo trabajamos con src y al final todo el proyecto se va generar igual que en create-react-app 
// * para construir es igual que en create-react-app con el comando: "npm run build" esto va crear una carpeta "dist" y pueden ver que ahi esta el codigo convertido es lo mismo al final

// * EXTENSIONES para mejorar en la creacion de Aplicaciones de React: Emment en React, hay que revisar, primero ejecutamos "command + shift + p" y buscamos "user settings" escojan la que no dice json, en el buscador escribir "emmet" y esto nos lleva a la configuracion de emmet, buscamos la parte que dice "Include Langaujes" y verificamos que este "javascript": "javascriptreact" esto quiere decir que ya esta disponible para jsx; la otra extension es "ES7 react" del autor dsznajder, es una serie de snipets codigo que pueden utilizar 