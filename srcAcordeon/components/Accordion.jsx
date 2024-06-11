import React, { useState } from "react";
import { Accordionitem } from "./Accordionitem";
import { data } from "./data.json";


export const Accordion = () => {
  
  const [activo, setActivo] = useState(-1);
  const onToggle = (elemento) => {

    if(elemento===activo){
      return setActivo(-1);
    }
      setActivo(elemento);
    
  }

  return (
    <>
      <ul className="accordion">
        {data.map((objeto, index) => (
          <Accordionitem
            key={index}
            pregunta={objeto.pregunta}
            respuesta={objeto.respuesta}
            indice={index}
            toggle={onToggle}
            active = {activo===index}
          />
        ))}
      </ul>
    </>
  );
};