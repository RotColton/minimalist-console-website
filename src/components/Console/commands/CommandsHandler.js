import HelpCommand from './HelpCommand';
import downloadFile from './DownloadCV';

const CommandHandler = (command, onCommandResponse) => {
  const commands = {
    '--help': () => onCommandResponse(HelpCommand()),
    '-h': () => onCommandResponse(HelpCommand()),
    '-s': () => onCommandResponse("SKILLS \nJAVA | Sprint Boot | TDD | DDD | SOLID | Patterns Desing | Clean Architecture | Ports & Adapters | microservices | MongoDB | MySQL | Docker | Node js | Agile | Keycloak | CI | CD |"),
    '-e': () => onCommandResponse("EXPERIENCE []"),
    '-r': () => {
      downloadFile();
      onCommandResponse("CV download..."); 
    },
    '-a': () => onCommandResponse("ABOUT ME \n\nI am a software developer with hands-on experience building real solutions and a strong interest in software architecture and modern engineering practices."
                                  + "\n\n In my recent role as a mentor at a software development academy, I guided junior developers through their learning process. This required not only explaining concepts like Clean Architecture, DDD, and Hexagonal Architecture, but also coordinating their work, supporting their progress, and managing the team dynamic to help them deliver their training projects effectively."
                                  + "\n\nThis mentoring experience gave me the space to study architectural patterns in depth, translate theory into practical scenarios, and strengthen key skills such as communication, leadership, and simplifying complex ideas.""
                                  + "\n\nI am now looking for opportunities where I can apply this knowledge to create well-structured solutions, contribute to a thoughtful engineering culture, and continue growing in roles that combine development, architecture, and technical leadership."),
    '-c': () => onCommandResponse("COMPETENCIES \n\nContinuous Learning | Critical Thinking | Problem Solving | Strategic Thinking | Systems Thinking | Continuous Improvement | Decision-Making | Technical Leadership | Mentoring Team Leadership | Mentoring & Coaching | Communication | Empathy | Emotional Intelligence | Conflict Management | Motivation "),
    '-g': () => onCommandResponse("https://github.com/RotColton"),
    '-clear': () => onCommandResponse("clear"), // Podemos manejar el clear desde el componente Console
  };

  if (commands[command]) {
    commands[command](); // Ejecuta la función correspondiente
  } else {
    onCommandResponse(`Unrecognized command:: ${command}`);
  }
};

export default CommandHandler;
