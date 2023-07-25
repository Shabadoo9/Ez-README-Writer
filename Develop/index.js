// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
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
        name: 'testInstructions',
        message: 'readme test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project:',
        choices: ['ISC', 'MIT', 'Apache-2.0', 'GNU GPLv3', 'None'],
        default: 'None',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data written to file successfully.');
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const licenseSection = generateMarkdown(answers);

            const readmeContent = `
            # ${answers.title}
            
            ## Description
            ${answers.description}
            
            ## Table of Contents
           - [Installation](#Installation)
           - [Usage](#Usage)
           - [License](#License)
           - [Contributing](#Contributing)
           - [tests](#Tests)
           - [Questions](#Questions) 
            
            ## Installation
            ${answers.installation}
            
            ## Usage
            ${answers.usage}

            ## Contributing
            ${answers.contributing}

            ## Tests
            ${answers.testInstructions}

            ${licenseSection}

            ## questions
            Reach out to me with any questions on my github ${answers.github} github.com/${answers.github}
            Or Email me at ${answers.email}
            
            
            `;

            writeToFile('README.md', readmeContent);
        })
        .catch((err) => {
            console.error('Error occurred during prompt:', err);
        });
}


// Function call to initialize app
init();
