import React from 'react';

export default function Encuestas1(props) {
  return (
    <div>
      <h2>Encuestas Disponibles</h2>
      <ol>
        {props.preguntas.map((pregunta, index) => (
          <li key={index}>
            {pregunta}
            <ul>
              {props.opciones.map((opcion, opcionIndex) => (
                <li key={opcionIndex}>{opcion}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
