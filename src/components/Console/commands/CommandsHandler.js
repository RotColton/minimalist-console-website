// CommandHandler.js
import HelpCommand from './HelpCommand';

const CommandHandler = (command, onCommandResponse) => {
  const commands = {
    '--help': () => onCommandResponse(HelpCommand()),
    '-h': () => onCommandResponse(HelpCommand()),
    '-s': () => onCommandResponse("Estas son mis habilidades disponibles: [Inserta lista de habilidades aquí]"),
    '-e': () => onCommandResponse("Esta es mi experiencia acumulada: [Inserta experiencia aquí]"),
    '-r': () => onCommandResponse("Aquí puedes ver mi resumen: [Inserta el enlace o detalles del resumen aquí]"),
    '-a': () => onCommandResponse("Información sobre mí: [Inserta detalles sobre ti aquí]"),
    '-c': () => onCommandResponse("Estas son mis competencias específicas: [Inserta competencias aquí]"),
    '-g': () => onCommandResponse("Aquí está la URL de mi repositorio de GitHub: https://github.com/tuusuario/turepositorio"),
    '-clear': () => onCommandResponse("clear"), // Podemos manejar el clear desde el componente Console
  };

  if (commands[command]) {
    commands[command](); // Ejecuta la función correspondiente
  } else {
    onCommandResponse(`Comando no reconocido: ${command}`);
  }
};

export default CommandHandler;
