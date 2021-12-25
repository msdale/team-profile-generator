const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const { restoreDefaultPrompts } = require('inquirer');

const promptEngineerInfo = teamData => {
  if (!teamData.engineers) {
    teamData.engineers = [];
  }
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engineerNameInput',
      message: "What is the Engineer's name? (Required)",
      validate: engineerNameInput => {
        if (engineerNameInput) {
          return true;
        } else {
          console.log("Please enter the Engineer's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerEmployeeId',
      message: "What is the Engineers's employee ID? (Required)",
      validate: engineerEmployeeId => {
        if (engineerEmployeeId) {
          return true;
        } else {
          console.log("Please enter the Engineer's employee ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is the Engineers's email? (Required)",
      validate: engineerEmail => {
        if (engineerEmail) {
          return true;
        } else {
          console.log("Please enter the Engineer's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerGithubUser',
      message: "What is the Engineers's Github username? (Required)",
      validate: engineerGithubUser => {
        if (engineerGithubUser) {
          return true;
        } else {
          console.log("Please enter the Engineer's Github username!");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddMember',
      message: 'Would you like to add more members to the Team?',
      default: false
    },
    {
      type: 'list',
      name: 'memberTypeToAdd',
      message: 'Choose an engineer or an intern:',
      choices: ['engineer', 'intern'],
      when: ({ confirmAddMember }) => confirmAddMember
    }
  ])
    .then(engineerData => {
      teamData.engineers.push(engineerData);
      if (engineerData.confirmAddMember) {
        if (engineerData.memberTypeToAdd === 'engineer') {
          return promptEngineerInfo(teamData);
        } else if (engineerData.memberTypeToAdd == 'intern') {
          return promptInternInfo(teamData);
        }
      }
      return teamData;
    });
};

const promptInternInfo = teamData => {
  if (!teamData.interns) {
    teamData.interns = [];
  }
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: "What is the Intern's name? (Required)",
      validate: internNameInput => {
        if (internNameInput) {
          return true;
        } else {
          console.log("Please enter the Interns's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internEmployeeId',
      message: "What is the Intern's employee ID? (Required)",
      validate: internEmployeeId => {
        if (internEmployeeId) {
          return true;
        } else {
          console.log("Please enter the Intern's employee ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is the Intern's email? (Required)",
      validate: internEmail => {
        if (internEmail) {
          return true;
        } else {
          console.log("Please enter the Intern's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What is the Intern's college name? (Required)",
      validate: internSchool => {
        if (internSchool) {
          return true;
        } else {
          console.log("Please enter the Intern's college name!");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddMember',
      message: 'Would you like to add more members to the Team?',
      default: false
    },
    {
      type: 'list',
      name: 'memberTypeToAdd',
      message: 'Choose an engineer or an intern:',
      choices: ['engineer', 'intern'],
      when: ({ confirmAddMember }) => confirmAddMember
    }
  ])
    .then(internData => {
      teamData.interns.push(internData);
      if (internData.confirmAddMember) {
        if (internData.memberTypeToAdd === 'engineer') {
          return promptEngineerInfo(teamData);
        } else if (internData.memberTypeToAdd == 'intern') {
          return promptInternInfo(teamData);
        }
      }
      return teamData;
    });
};

const promptTeamInfo = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'teamName',
      message: 'What is your Team name? (Required)',
      validate: teamNameInput => {
        if (teamNameInput) {
          return true;
        } else {
          console.log('Please enter you Team name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerName',
      message: "What is the Manager's name? (Required)",
      validate: managerNameInput => {
        if (managerNameInput) {
          return true;
        } else {
          console.log("Please enter the Manager's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmployeeId',
      message: "What is the Manager's employee ID? (Required)",
      validate: managerEmployeeId => {
        if (managerEmployeeId) {
          return true;
        } else {
          console.log("Please enter the Manager's employee ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the Manager's email? (Required)",
      validate: managerEmail => {
        if (managerEmail) {
          return true;
        } else {
          console.log("Please enter the Manager's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "What is the Manager's office number? (Required)",
      validate: managerOfficeNumber => {
        if (managerOfficeNumber) {
          return true;
        } else {
          console.log("Please enter the Manager's office number!");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddMember',
      message: 'Would you like to add members to the Team?',
      default: false
    },
    {
      type: 'list',
      name: 'memberTypeToAdd',
      message: 'Choose an engineer or an intern:',
      choices: ['engineer', 'intern'],
      when: ({ confirmAddMember }) => confirmAddMember
    }
  ])
};

promptTeamInfo()
  .then(teamData => {
    if (teamData.confirmAddMember) {
      if (teamData.memberTypeToAdd === 'engineer') {
        return promptEngineerInfo(teamData);
      } else if (teamData.memberTypeToAdd === 'intern') {
        return promptInternInfo(teamData);
      }
      return teamData;
    }
  })
  .then(moreData => {
    console.log(JSON.stringify(moreData));
  })
  .catch(err => {
    console.log(err);
  });