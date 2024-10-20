import React, { useState } from 'react';
import './ConsoleInput.css';
import HostName from './HostName';
const ConsoleInput = () => {
  const [inputValue, setInputValue] = useState(""); // Estado para el input
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Actualiza el valor del input
  };

  return (
    <div className="console-input-container">
      <HostName />
      <input
        id="consoleInput"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="console-input"
        autoFocus
      />
    </div>
  );
};

export default ConsoleInput;
