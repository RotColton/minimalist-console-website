const HelpCommand = () => {
  return (
    `
Description:
    This tool provides information about my professional profile, including skills, experience, resume, and relevant links.

List of parameters:

     -s         skills              Displays available skills.
     -e         experience          Displays accumulated experience.
     -r         resume              Displays the resume.
     -a         about me            Displays information about me.
     -c         competencies        Displays specific competencies.
     -g         github              Displays the link to my GitHub repository.
     -l         linkedin            Displays the link to my LinkedIn profile.

     -h         help                Displays this help message.
     -clear     clear               Clears the console.
  `
  );
};

export default HelpCommand;