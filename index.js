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