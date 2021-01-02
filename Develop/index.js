const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown.js")
const fs = require('fs');



       
const questions=[

{
            type: "input",
            message: "What is your GitHub user name?",
            name: "UserName"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "Email"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "Title"
        },
        {
            type: "input",
            message: "Please write a short description of your project.",
            name: "Description"
        },
        {
            type: "list",
            message: "what kind of license should your project have?",
            name: "License",
            choices: [
            "Mit",
            "Apache",
            "BSD"
            ]
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "Installation"
        },
        {
            type: "input",
            message: "what command should be run to run tests ",
            name: "Test"
        },
        {
            type: "input",
            name: "usage",
            message: "explain how your program is utilized."
        },
        {
            type: "input",
            message: "who are the contributors to this the repo?",
            name: "Contributing"
        }
     
        ];
    

        function writeToFile(fileName, data) {


            fs.writeFile("../demo/"+fileName, data, function(err) {
                if (err) {
                    return console.log(err);
                }
            console.log ("Successfully wrote: " + fileName);
            })
        }

        function init() {
            inquirer.prompt(questions)
            .then(function(data) {
                writeToFile("README.md", generatorMarkdown(data));
            })
        }

        init();