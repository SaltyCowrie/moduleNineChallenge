// TODO: Include packages needed for this application
const fs = require ('fs')
const inquirer = require ('inquirer')
const generateMarkdown = require ('./utils/generateMarkdown');
const { error } = require('console');

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "Title",
    message: "What would be the title?",
},
{
    type: "input",
    name: "Description",
    message: "How would you describe the project?",
},
{
    type: "input",
    name: "Goal",
    message: "What is the goal of the application?",
},
{
    type: "input",
    name: "Credit",
    message: "Who helped create this project?",
},
{
    type: "input",
    name: "License",
    message: "Which license was used if any?"
}];

// for(let i = 0; i < questions.length; i++){
//    console.log(questions[i]);
// };

function generateReadMe (answers) {
    console.log(answers)
};

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(fileName, response, (err) => {if (err)
        {console.log ("Error Occured")} else {console.log ("ReadMe Created Successfully")}
    })
}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then( answers => { 
    const response = generateMarkdown(answers)
    const fileName = "readme.md"
    writeToFile (fileName, response)
})};


// Function call to initialize app
init();
