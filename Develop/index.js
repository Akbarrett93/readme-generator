// Requirements for code
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array for input
const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter your full name:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please provide your name so you may credit your work.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        messsage: "Enter your GitHub username:",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please provide your GitHub username so people may see your work.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please provide your email address so people may contact you.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project:",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("A title is required for every project, please enter one.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description for your project:",
        validate: desInput => {
            if (desInput) {
                return true;
            } else {
                console.log("Descriptions are essential for projects. Think about the motivation to build the project, what does it solve, and what did your learn creating it.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the installation instructions:",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log("Installation instructions are required so users may have all the proper software to run your application");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for usage:",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Proper instructions and examples of use are necessary so users can correctly run your application. Enter screenshots when necessary");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "credits",
        message: "Provide a list of collaborators and their GitHub profiles, tutorials, or third-party assets that require attribution if any:",
        validate: creditInput => {
            if (creditInput) {
                return true;
            } else {
                console.log("It is required to give credit to those who helped collaborate with your project.");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmLicenses",
        message: "Would you like to include a license?",
        default: false,
    },
    {
        type: "list",
        name: "licenses",
        message: "Which license would you like to include?",
        choices: ["MIT", "GPLv3", "Apache", "ISC"],
        when: ({confirmLicenses}) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
