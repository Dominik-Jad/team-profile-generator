const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamMembers = [];

// questions for the user to answer about the manager
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter a name";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter an id";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter an email";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter an office number";
            }
            return true;
        }
    }
];

// questions for the user to answer about the engineer 
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter a name";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter an id";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter an email";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter a github";
            }
            return true;
        }
    }
];

// questions for the user to answer about the intern 
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter a name";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter an id";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter an email";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        validate:  answer => {
            if (answer === "") {
                return "Please enter a school";
            }
            return true;
        }
    }
];

const addTeamMembers = () => {
    inquirer
        .prompt({
            type: "list",
            name: "addTeamMember",
            message: "Would you like to add a team member?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        })
        .then(answer => {
            if (answer.addTeamMember === "Engineer") {
                addEngineer();
            }
            else if (answer.addTeamMember === "Intern") {
                addIntern();
            }
            else {
                console.log("No more team members to add");
                console.log(teamMembers);
                console.log("Generating team profile");
                fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
                console.log("Team profile generated");
            }
        });
}


inti = () => {
    inquirer
        .prompt(managerQuestions)
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(manager);
            addTeamMembers();
        }); 
}

inti();