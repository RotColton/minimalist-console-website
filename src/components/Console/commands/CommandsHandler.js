import HelpCommand from './HelpCommand';
import redirectSiteResume from './SiteResume';

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
    Node.js            | Agile              | Keycloak           | CI/CD
    Swagger            | Git                | GitHub             | REST
    APIs               | JavaScript         | TypeScript         | React
    `
    ),

    '-e': () => onCommandResponse(
      `
    +------------------+
    |    EXPERIENCE    |
    +------------------+

    Java Mentor
    IT Academy
    02/2023 - Present, Barcelona

    - Guided groups of 20 students in learning Java, Spring Boot, and professional development paradigms.

    - Taught advanced design concepts: SOLID, Clean Code, DDD, and Design Patterns, applying them to real projects.

    - Responsible for team management, conflict resolution, and coordination of collaborative activities.

    - Designed practical projects focused on clean architecture and best practices.

    Skills: Java | Spring Boot | WebFlux | MongoDB | MySQL | Git/GitHub | SOLID | TDD | DDD


    Backend Developer
    Eurecat
    02/2023 - 01/2025, Barcelona

    - Developed Chatbots with LLMs in a collaborative team with Data Science professionals.

    - Integrated multiple APIs to leverage LLMs across different platforms.

    - Researched emerging technologies to implement cutting-edge solutions.

    Skills: Node.js | ChatGPT | Docker | Keycloak | Apache Kafka | Java | Spring Boot | CI/CD | GitHub


    Software Developer
    Freelance
    02/2018 - 03/2023

    - Developed and designed web applications using various technologies.

    - Programmed microcontrollers.

    - Contributed to code refactoring and test development.

    Skills: Java | JUnit | Maven | REST | SQL | Python | C/C++ | JavaScript | Assembler


    Functional Analyst
    Accenture
    02/2017 - 01/2018, Argentina

    - Contributed to development and design of web applications.

    - Implemented CI/CD pipelines using Jenkins.

    - Created automated and integration tests with Selenium.

    - Built parallel processes with Spring Batch.

    - Collaborated in multidisciplinary teams applying Agile methodologies.

    Skills: Java | Spring Boot | Selenium | Jenkins | Spring Batch | Hibernate | Oracle SQL
    `
    ),

    '-r': () => {
      redirectSiteResume();
      onCommandResponse("Redirecting to external site..."); 
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
