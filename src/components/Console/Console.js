import React, { useState, useEffect } from 'react';
import './Console.css';  // Para los estilos

const Console = () => {
  const log = "Waiting for Rot to wake up";
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      setDots((prevDots) => (prevDots + 1) % 4); // Cicla entre 0, 1, 2, 3
    }, 500); // Ajusta la velocidad de los puntos

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="console-container">
      <div className="console-header">
        <div className="console-buttons">
          <div className="console-button green"></div>
          <div className="console-button green"></div>
          <div className="console-button green"></div>
        </div>
      </div>
      <div className="console">
        <p>rot@spacehost:~# {log}{".".repeat(dots)}</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
};

export default Console;
