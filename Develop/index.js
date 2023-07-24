// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'readme Title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'readme description',
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'readme table of contents',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'readme installation',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'readme usage',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'readme Contributing',
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'readme test instructions',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github Username',
    },
    {type: 'input',
    name: 'Email',
    message: 'Email Address',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
