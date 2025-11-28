import HelpCommand from './HelpCommand';
import downloadFile from './DownloadCV';

const CommandHandler = (command, onCommandResponse) => {
  const commands = {
    '--help': () => onCommandResponse(HelpCommand()),
    '-h': () => onCommandResponse(HelpCommand()),

    '-s': () => onCommandResponse(
      `
    +-----------------+
    |     SKILLS      |
    +-----------------+

    JAVA               | Spring Boot        | TDD                | DDD
    SOLID              | Design Patterns    | Clean Architecture | Docker
    Ports & Adapters   | Microservices      | MySQL              | MongoDB
    Node.js            | Agile              | Keycloak           | CI
    CD                 | Git                | GitHub             | REST
    APIs               | JavaScript         | TypeScript         | React
    `
    ),

    '-e': () => onCommandResponse("[IN PROGRESS]"),
    '-r': () => {
      downloadFile();
      onCommandResponse("CV download..."); 
    },

    '-a': () => onCommandResponse(
      `
    +------------------+
    |     ABOUT ME     |
    +------------------+

    I am a software developer with hands-on experience building real solutions and a strong interest in software architecture and modern engineering practices.

    In my recent role as a mentor at a software development academy, I guided junior developers through their learning process. This required not only explaining concepts like SOLID, Clean Architecture, DDD, and Hexagonal Architecture, but also coordinating their work, supporting their progress, and managing the team dynamic to help them deliver their training projects effectively.

    This mentoring experience gave me the space to study architectural patterns in depth, translate theory into practical scenarios, and strengthen key skills such as communication, leadership, and simplifying complex ideas.

    I am now looking for opportunities where I can apply this knowledge to create well-structured solutions, contribute to a thoughtful engineering culture, and continue growing in roles that combine development, architecture, and technical leadership.
    `
    ),

    '-c': () => onCommandResponse(
      `
    +---------------------+
    |    COMPETENCIES     |
    +---------------------+

    Continuous Learning        | Continuous Improvement    | Motivation    
    Technical Leadership       | Mentoring & Coaching      | Empathy
    Emotional Intelligence     | Conflict Management       | Scrum
    Agile Methodologies        | Strategic Thinking        | Kanban
    `
    ),

    '-g': () => onCommandResponse("https://github.com/RotColton"),
    '-l': () => onCommandResponse("https://www.linkedin.com/in/rotit/"),
    '-clear': () => onCommandResponse("[IN PROGRESS]"), 
  };

  if (commands[command]) {
    commands[command](); 
  } else {
    onCommandResponse(`Unrecognized command: ${command}`);
  }
};

export default CommandHandler;
