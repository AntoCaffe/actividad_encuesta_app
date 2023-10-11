import './App.css';
import Encuestas1 from './components/Encuestas1';

function App() {
  const preguntas = [
    {
      id: 1,
      pregunta: '¿Cuál es tu color favorito?',
      opciones: ['Rojo', 'Azul', 'Verde'],
      respuesta: null,
    },
    {
      id: 2,
      pregunta: '¿Cuál es tu comida favorita?',
      opciones: ['Pizza', 'Hamburguesa', 'Sushi'],
      respuesta: null,
    },
  ];

  return (
    <div className="Encuestas App">
      <header className='App-header'>
        <h1>Aplicación de Encuestas</h1>
      <Encuestas1 preguntas={preguntas} />
      </header>
    </div>
  );
}

export default App;


