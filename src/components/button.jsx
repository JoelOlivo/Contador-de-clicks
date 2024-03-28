import React from "react";
import '../stylesheets/button.css'

function Boton({textoBoton, funcion}) {
  return (
    <button 
      className={textoBoton === 'Click' ? 'boton-click' : 'boton-reiniciar'}
      onClick={funcion}
      >
        
      {textoBoton}
    </button>
  );
}

export default Boton;