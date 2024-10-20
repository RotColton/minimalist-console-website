// ConsoleInput.js actualizado
import React, { useState } from 'react';
import './ConsoleInput.css';
import HostName from './HostName';
import HelpCommand from './HelpCommand';

const ConsoleInput = ({ onCommandResponse }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Actualiza el valor del input
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      processCommand(inputValue);
      setInputValue(""); // Limpiar el input después de enviar el comando
    }
  };

  const processCommand = (command) => {
    if (command === '--help' || command === '-h') {
        onCommandResponse(HelpCommand());
    } else {
        sendCommandToServer(command);
    }
  };

  const sendCommandToServer = async (command) => {
    try {
      const response = await fetch('http://localhost:8080/command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
      });
      const data = await response.json();
      onCommandResponse(data.response);
    } catch (error) {
      console.error('Error al enviar el comando:', error);
    }
  };

  return (
    <div className="console-input-container">
      <HostName />
      <input
        id="consoleInput"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="console-input"
        autoFocus
      />
    </div>
  );
};

export default ConsoleInput;
