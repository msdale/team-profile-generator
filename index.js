const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const { promptEngineerInfo, promptInternInfo, promptTeamInfo } = require('./utils/gather-team-data');


const extractManager = function(teamData) {
  return new Manager(teamData.managerName,
     teamData.managerEmployeeId,
     teamData.managerEmail,
     teamData.managerOfficeNumber);
};

const extractEngineers = function(teamData) {
  let engineers = [];
  for (let i = 0; i < teamData.engineers.length; i++) {
    let eng = teamData.engineers[i];
    engineers.push(new Engineer(eng.engineerNameInput,
                                eng.engineerEmployeeId,
                                eng.engineerEmail,
                                eng.engineerGithubUser));
  }
  return engineers;
};

const extractInterns = function(teamData) {
  let interns = [];
  for (let i = 0; i < teamData.interns.length; i++) {
    let eng = teamData.interns[i];
    interns.push(new Intern(eng.internNameInput,
                                eng.internEmployeeId,
                                eng.internEmail,
                                eng.internSchool));
  }
  return interns;
};



/**
 * Global variables
 */
let manager = {};
let engineers = [];
let interns = []; 

promptTeamInfo()
  .then(teamData => {
    if (teamData.confirmAddMember) {
      if (teamData.memberTypeToAdd === 'engineer') {
        return promptEngineerInfo(teamData);
      } else if (teamData.memberTypeToAdd === 'intern') {
        return promptInternInfo(teamData);
      }
    }
    return teamData;
  })
  .then(teamData => {
    // Convert JSON data to class objects
    manager = extractManager(teamData);
    engineers = extractEngineers(teamData);
    interns = extractInterns(teamData);
  })
  .then(() => {
    // Populate the HTML page
    
  })
  .catch(err => {
    console.log(err);
  });