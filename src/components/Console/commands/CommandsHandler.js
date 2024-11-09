import HelpCommand from './HelpCommand';
import downloadFile from './DownloadCV';

const CommandHandler = (command, onCommandResponse) => {
  const commands = {
    '--help': () => onCommandResponse(HelpCommand()),
    '-h': () => onCommandResponse(HelpCommand()),
    '-s': () => onCommandResponse("Estas son mis habilidades disponibles: [Inserta lista de habilidades aquí]"),
    '-e': () => onCommandResponse("Esta es mi experiencia acumulada: [Inserta experiencia aquí]"),
    '-r': () => {
      downloadFile();
      onCommandResponse("Iniciando descarga de CV..."); // Mensaje opcional para mostrar en la consola
    },
    '-a': () => onCommandResponse("Información sobre mí: [Inserta detalles sobre ti aquí]"),
    '-c': () => onCommandResponse("Estas son mis competencias específicas: [Inserta competencias aquí]"),
    '-g': () => onCommandResponse("https://github.com/RotColton"),
    '-clear': () => onCommandResponse("clear"), // Podemos manejar el clear desde el componente Console
  };

  if (commands[command]) {
    commands[command](); // Ejecuta la función correspondiente
  } else {
    onCommandResponse(`Comando no reconocido: ${command}`);
  }
};

export default CommandHandler;
