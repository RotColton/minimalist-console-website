import React from 'react';
import Console from './components/Console/Console';  // Nuestro componente de consola
import './App.css';  // Aquí añadiremos los estilos minimalistas
import StarryBackground from './components/StarryBackground/StarryBackground';
function App() {
  return (
    <StarryBackground>
      <div className="App">
        <div className="container">
          <Console />
        </div>
      </div>
    </StarryBackground>
  );
}
export default App;

