import React, { useState, useEffect } from 'react';
import './Console.css';  // Para los estilos
import ConsoleInput from './ConsoleInput';
import InitialLog from './InitialLog';
import HostName from './HostName';

const Console = () => {
 
  const [log, setLog] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [serverResponse, setServerResponse] = useState('');

  const handleCommandResponse = (response) => {
    setServerResponse(response);
  };
 
  useEffect(() => {
    let index = 0;
    const logContent = InitialLog();
    const typeInterval = setInterval(() => {
      if (index < logContent.length) {
        setLog((prevLog) => prevLog + (logContent[index] || ''));
        index++;
      } else {
        clearInterval(typeInterval);
        setShowInput(true);
      }
    },); // Ajusta la velocidad de escritura

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
      <div className="console" >
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <HostName />          
        </div>
        {log && (
          <div style={{ whiteSpace: 'pre-wrap', marginTop: '1em' }}>{log}</div>
        )}
        {showInput && <ConsoleInput onCommandResponse={handleCommandResponse} />} 
        {serverResponse && (
          <div style={{ whiteSpace: 'pre-wrap', marginTop: '1em' }}>{serverResponse}</div>
        )}
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
};

export default Console;