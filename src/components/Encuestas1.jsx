import React from 'react';
import Preguntas from './Preguntas';

export default function Encuestas1({ preguntas }) {
  return (
    <div>
      <h2>Encuestas Disponibles</h2>
      <ol>
        {preguntas.map((pregunta, index) => (
          <li key={index}>
            {pregunta.pregunta}
            <Preguntas pregunta={pregunta} />
          </li>
        ))}
      </ol>
    </div>
  );
}

