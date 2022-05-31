import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="I1"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapur"
          imagen="I3"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          imagen="I2"
          cargo="Ingeniera de Software"
          empresa="ChatDesk"
          testimonio="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
    </div>
  );
}

export default App;
