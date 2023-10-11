import React, { useState } from 'react';

export default function Preguntas({ pregunta }) {
  const [respuesta, setRespuesta] = useState(null);

  const handleRadioChange = (opcionIndex) => {
    setRespuesta(opcionIndex);
  };

  return (
    <ul>
      {pregunta.opciones.map((opcion, opcionIndex) => (
        <li key={opcionIndex}>
          <label>
            <input
              type="radio"
              name={`pregunta-${pregunta.id}`}
              value={opcionIndex}
              checked={respuesta === opcionIndex}
              onChange={() => handleRadioChange(opcionIndex)}
            />
            {opcion}
          </label>
        </li>
      ))}
    </ul>
  );
}

