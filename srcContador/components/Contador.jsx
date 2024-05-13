/* eslint-disable no-unused-vars */
import React from 'react'
import { ListaOvejas } from './ListaOvejas'
import { useState } from 'react'

export const Contador = () => {

    //Lógica
    const [contador, setContador] = useState(0)


    function incrementar (){
        setContador(contador+1);
    }

  return (
    <>
      <h3 className='title'>Contador de Ovejas</h3>
      <div className='wrapper'>
        <h4 className='counter'>{contador}</h4>
      <button className='button' onClick={incrementar}>Contar :)</button>
      <ListaOvejas numeroOvejas={contador}></ListaOvejas>
      </div>
    </>
  )
}

