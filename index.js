const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');

const promptManagerInfo = () => {
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
    }
  ])
};

