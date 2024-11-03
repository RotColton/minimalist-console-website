import React, { useState } from 'react';
import './style/ConsoleInput.css';
import HostName from './HostName';
import CommandHandler from './commands/CommandsHandler';

const ConsoleInput = ({ onCommandResponse }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Actualiza el valor del input
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Procesa el comando usando CommandHandler
      CommandHandler(inputValue.trim(), onCommandResponse);
      setInputValue(""); // Limpiar el input después de enviar el comando
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
