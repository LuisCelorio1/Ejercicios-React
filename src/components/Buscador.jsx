import { useState } from 'react'

export const Buscador = () => {

  const palabras = ["hola", "adios", "chao", "limón", "naranja", "piña", "manzana"];
  const [inputValue, setInputValue] = useState('');

  const PalabrasFiltradas = palabras.filter(palabra =>
    palabra.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
    Buscar:
    <input
      type="text"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
    <ol>
      {PalabrasFiltradas.map((palabra) => (
        <li key={palabra}>{palabra}</li>
      ))}
    </ol>
  </div>
);
};

