# team-profile-generator


## Description

The Team Profile Generator generates a styled HTML page that displays summary information about a software development team and it's members, while also providing access to the individual member Github profiles.


## Table Of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)


## Installation

It is assumed the local computing environment already has a recent version of node and npm installed.  If not please check out https://nodejs.org/en/download/ and install node and npm.  To run this node application, clone this github repository using the command 'git clone https://github.com/msdale/team-profile-generator.git <optional_root_directory_name>'.  Attach to the team-profile-generator root directory and execute the commands 'npm install', 'npm install fs-extra' and 'npm install inquirer' to ensure all project module dependencies are availablel and updated.  Now you are ready to run the team profile generator.


## Usage

To execute the application, from the command line, attach to the root directory of the team profile generator repository clone and run the command 'node index.js'.  This will walk the user through a series of questions.  Here is an example of the question series when the user enters information for a team consisting of a Manager, and Engineer and an Intern...

? What is your Team name? (Required) The BLITZ  
? What is the Manager's name? (Required) Ray Turner  
? What is the Manager's employee ID? (Required) 9324582  
? What is the Manager's email? (Required) Ray.Turner@improv.com  
? What is the Manager's office number? (Required) 304B  
? Would you like to add members to the Team? Yes  
? Choose an engineer or an intern: engineer  
? What is the Engineer's name? (Required) Julia Kamsis  
? What is the Engineers's employee ID? (Required) 9562311  
? What is the Engineers's email? (Required) Julia.Kamsis@improv.com  
? What is the Engineers's Github username? (Required) jkamsis  
? Would you like to add more members to the Team? Yes  
? Choose an engineer or an intern: intern  
? What is the Intern's name? (Required) Jaquin Samdala  
? What is the Intern's employee ID? (Required) 7283574  
? What is the Intern's email? (Required) Jaquin.Samdala@improv.com  
? What is the Intern's college name? (Required) University of Central Florida  
? Would you like to add more members to the Team? No  
{ ok: true, message: 'HTML file created!' }  
{ ok: true, message: 'CSS file copied!' }  


You'll have to work through required vs default answers. The actual answers are not as important as all the sections you decide to include.  Keep the answers short and to the point; you'll probably edit them later. NOTE; There will be a question about the availability of a 'Usage Video' referencing an mp4 file named './assets/videos/usage-link.url'.  If you want to supply a usage video you will reply (y) to the prompt, but you must previously create an mp4 formatted video and install it in github.  Here's how; create the mp4 file; drag and drop it into any git repository markdown file while viewing the markdown file in the github browser. The dropped mp4 file will be transformed to a URL pointing to the mp4 file saved in a unique user-images.githubusercontent.com location. Place that URL as the only line in the './assets/videos/usage-link.url' file.