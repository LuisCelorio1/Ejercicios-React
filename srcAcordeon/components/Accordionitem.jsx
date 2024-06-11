import React, { useState } from "react";

export const Accordionitem = ({ pregunta, respuesta, indice,  toggle, active}) => {

    const mandarIndice = () => {
      toggle(indice);
    }

  return (
    <>
      <li className={!active ? "accordion_item " : "accordion_item active"}>
        <button className="button" onClick={mandarIndice}>
          {pregunta}
          <span className="control">{!active ? "+" : "-"}</span>
        </button>
        <div className={!active ? "answer_wrapper " : "answer_wraper open"}>
          <p className="answer">{respuesta}</p>
        </div>
      </li>
    </>
  );
};