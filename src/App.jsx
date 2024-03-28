import './App.css';
import freecodecamplogo from './img/freecodecamp-logo.png'
import Boton from './components/button';
import ContadorClicks from './components/contador';
// (HOOKS) Estados
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const contadorClick = () => {
    setNumClicks(numClicks + 1); 
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freecodecamplogo} alt='logo de freecodecamp' height='50px'/>
      </div>  
      <div className="contenedor-principal">
        <ContadorClicks
          click = {numClicks}
        />

        <Boton 
          textoBoton = 'Click' 
          funcion = {contadorClick}
        />

        <Boton 
          textoBoton = 'Reiniciar' 
          funcion = {reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
