import './App.css';
import Encuestas1 from './components/Encuestas1';

function App() {
  const preguntas = ["¿Cuál es tu color favorito?", "¿Cuál es tu comida favorita?"];
  const opciones = ["Rojo", "Azul", "Verde"]; 

  return (
    <div className="Encuestas App">
      <header className='App-header'>
        <h1>Aplicación de Encuestas</h1>
      </header>
      <Encuestas1 preguntas={preguntas} opciones={opciones} />
    </div>
  );
}

export default App;

