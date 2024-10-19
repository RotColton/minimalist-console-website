import React, { useState, useEffect } from 'react';
import './Console.css';  // Para los estilos

const Console = () => {
  const initialLog = ` *** Welcome to Rot Shell v1.0 ***

  ░▓▒░                                     ░░▒▒░
 ░▓█▓▒░                                 ░▒▓██░░
 ░▓███▓░                               ░▒▓███░░
 ▒█████▓░                             ░▓█████▓░
░███████▓░░                         ░░▓███████░
▓████████▓▒░                       ░▒▓████████▓
▓██████████▓▒░░                 ░░▒▓██████████▓
▓████████████▓▒░░░░▒▒▒▒▓▒▒▒▒░░░░▒▓████████████▓
▒████████████▓▓▓███████████████▓▒▓████████████▒
░▓███████████████████████████████████████████▓░
 ▒███████████████████████████████████████████▒░
 ░▓█████████████████████████████████████████▓░░
 ░▒█████████████████████████████████████████▒░ 
 ░░▒▓▓▓█▓██████████████████████████████▓▓▓▓▒░░░
 ░▓░▒▓▒▒▓▓▓█████████████████████████▓▓▓▒▒▓▒▒▓░ 
 ▓░▓▒░░░▒█▒▒███████████▒███████████▓▒█▒░░░▒▓▒▓░
 ▒█░█▓░▒▓██▓▒▓███████▓░  ▓███████▓▒▒██▓▒░▓█░▓▒░
 ▒█▒▒██▓▒░░▒▒░░▓█████░░  ░█████▓░░▒▒░░▒▓██▒▒▓▒░
 ▒█▓░▓███▓▒████▓█████░░  ░█████▓████▒▓███▓░▓█▒░
 ▒▓▓▒░█▓▓▓▒░░░░░░▒▓██▓▒░▒███▓▒░░░░░░▒▓▓▓▓░▒▓▓▒░
 ▓▓▓▓▓░▓▓▒█▒░    ░░▓███████▓░░    ░▒▓▓▓▓░▓▓▓▓▓░
 ▓▓▓▓▒░░░░▓█▓▓▓▓▓▒░░▓█████▓░░▒▓▓▓▓▓█▓▒░░░▒▓▓▓▓░
 ▒█▒▓█▓▓▒░░▓▓▓█████▒▓█████▓▒█████▓▓▓░░▒▓▓█▓▒▓▒░
 ░▓█▓▒▓██▓▓▒░░▒▓████▓█████▓████▓▒░░▒▓▓██▓▒▒▓▓░░
 ░░▓█▓▒░░▒████▓▓▓█████████████▓▓▓████▓░░▒▓█▓░░ 
  ░░▒▓▓▓▒▒░▒▓██▓▓█████████████▓▓██▓▒░▒▒▓▓▓▒░░  
    ░░░▓▓▓▒▒▓█████████████████████▓▒▒▓▓▓▒░░    
       ░░▒▓▓▓▓██████▒▒░▒░░▒██████▓▓▓▓▒░░       
          ░░▒▓▓██████▓▒░▒▓███████▓▓░░          
            ░░▓█████████████████▓░░            
              ░▒▓█▓▓▓▓▓▓▓▓▓▓▓█▓▒░              
               ░░▓███████████▓░░               
                 ░░▒▓▓███▓▓▒░░                 
 
|---------------------------|
| Type --help or -h for     |
| available commands        |
|---------------------------|
`;
  const [log, setLog] = useState('');
  const [inputValue, setInputValue] = useState(""); // Nuevo estado para el input

  useEffect(() => {
    let index = 0;
    const logContent = initialLog;
    const typeInterval = setInterval(() => {
      if (index < logContent.length) {
        setLog((prevLog) => prevLog + (logContent[index] || ''));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, ); // Ajusta la velocidad de escritura

    return () => clearInterval(typeInterval);
  }, [initialLog]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Actualiza el valor del input
  };

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
          <span>rot@spacehost:~#</span>
          
        </div>
        {log && (
          <div style={{ whiteSpace: 'pre-wrap', marginTop: '1em' }}>{log}</div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
          <span>rot@spacehost:~# </span>
          <input id="consoleInput"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#6cb714',
              width: '100%',
              caretColor: '#6cb714',
              fontFamily: 'Courier New, Courier, monospace',
              fontSize: '1rem'
            }}
            autoFocus
          />
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
};

export default Console;
