/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'



export const ListaOvejas = ({numeroOvejas}) => {

    const ovejas = [];

  for (var i=0; i<numeroOvejas; i++) {
    ovejas.push(<img className='img' src="/oveja.png" alt="Oveja" />);
  }

  return (
    <div className='ovejas'>
      <ul className="image__list">
        {ovejas.map((oveja) => (
          <li key={oveja}>{oveja}</li>
        ))}
      </ul>
    </div>
  );
};
