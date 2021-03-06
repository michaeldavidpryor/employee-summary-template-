

// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
//
//
// let OUTPUT_DIR;
// OUTPUT_DIR = path.resolve(__dirname, "output");
// let outputPath;
// outputPath = path.join(OUTPUT_DIR, "team.html");
//
// const render = require("./lib/htmlRenderer");
//
//
// let teamSelect;
// teamOptions();
// const mainAnswers = []
//
// function teamOptions() {
//
//         inquirer.prompt ([
//             {
//                 type: 'list',
//                 name: 'team',
//                 message: 'Who are we adding today?',
//                 choices: [
//                     'manager',
//                     'engineer',
//                     'intern',
//                     'Nobody'
//                 ]
//             }
//
//         ]
//             )
//             .then (answers => {
//                 teamSelect = answers;
//                 const {team} = teamSelect;
//                 if (team === 'manager') {
//                     inquirer.prompt([
//                         {
//                             type: 'input',
//                             name: 'name',
//                             message: 'Enter new manager name'
//
//                         },
//                         {
//                             type: 'input',
//                             name: 'id',
//                             message: 'Enter new manager ID'
//                         },
//                         {
//                             type: 'input',
//                             name: 'email',
//                             message: 'Enter new manager email',
//
//                         },
//                         {
//                             type: 'input',
//                             name: 'officeNumber',
//                             message: 'Enter new manager office number'
//                         },
//                     ])
//                         .then (function (answers) {
//                             const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
//                             mainAnswers.push(manager);
//                             teamOptions();
//
//                         })
//                         .catch(function (err) {
//                             console.log(error)
//
//                         })
//
//                 } else if (team === 'engineer') {
//
//                     inquirer.prompt([
//                         {
//                             type: 'input',
//                             name: 'name',
//                             message: 'Enter new engineer name'
//                         },
//                         {
//                             type: 'input',
//                             name: 'id',
//                             message: 'Enter new engineer ID'
//                         },
//                         {
//                             type: 'input',
//                             name: 'email',
//                             message: 'Enter new engineer email'
//                         },
//                         {
//                             type: 'input',
//                             name: 'github',
//                             message: 'Enter new engineer github'
//                         }
//                     ])
//
//                         .then (function (answers) {
//                             const engineer = new Engineer(answers.name, answers.id, answers.email, answers.officeNumber);
//                             mainAnswers.push(engineer);
//                             teamOptions();
//
//                         })
//                         .catch(function (error) {
//                             console.log(error)
//                         })
//                 } else if (team === 'intern') {
//                     inquirer.prompt ([
//                         {
//                             type: 'input',
//                             name: 'name',
//                             message: 'Enter new intern name'
//                         },
//                         {
//                             type: 'input',
//                             name: 'id',
//                             message: 'Enter new intern ID',
//                         },
//                         {
//                             type: 'input',
//                             name: 'email',
//                             message: 'Enter new intern email',
//
//                         },
//                         {
//                             type: 'input',
//                             name: 'github',
//                             message: 'Enter new intern college'
//                         }
//                     ])
//                         .then (function (answers) {
//                             const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
//                             mainAnswers.push(intern);
//                             teamOptions();
//
//                         })
//                         .catch(function (err) {
//                             console.log(error);
//
//                         })
//                 } else if (team === 'nobody') {
//
//                     let html = render(mainAnswers);
//
//                     fs.writeFile(outputPath, html, function (err) {
//
//                         if (err) {
//                             console.log(err);
//                         }
//                     });
//                 }
//             });
//     }





const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");





hr()

async function hr() {
    const employeeArray = [];
    try {
        const hrQuestions = inquirer.prompt([
            {
                type: 'list',
                name: 'team',
                message: 'Who are we adding today?',
                choices: [
                    'Manager',
                    'Engineer',
                    'Intern',
                    'Im done, Thanks'
                ]
            }
        ])

        await inquirer.prompt(hrQuestions);

        if (answers.team === 'Manager') {
            const answers = await inquirer.prompt(managerQuestions);
            const manager = new Manager(answers.name, answers.email, answers.id, answers.officeNumber);
            employeeArray.push(manager)
            hrQuestions()
        }

        else if (answers.team === 'Engineer') {
            const answers = await inquirer.prompt(engineerQuestions);
            const engineer = new Engineer(answers.name, answers.email, answers.id, answers.github);
            employeeArray.push(engineer);
            hrQuestions()

        }

        else if (answers.team === 'Intern') {
            const answers = await inquirer.prompt(internQuestions);
            const intern = new Intern(answers.name, answers.email, answers.id, answers.school);
            employeeArray.push(intern);
            return hrQuestions()
        }

    }
    catch (e) {
        console.log(e)
    }
    finally {
        const teamString = render(employeeArray)
        fs.writeFile(outputPath, teamString, function (err) {
            if (err) {
                throw err
            };
            return hr()

        })
    }

}

const managerQuestions = [
    {
        type: 'input',
        name: "team",
        message: 'Enter new manager name'

    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter new manager ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter new manager email',

    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter new manager office number'
    }

]

const engineerQuestions =  [
    {
        type: 'input',
        name: 'name',
        message: 'Enter new engineer name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter new engineer ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter new engineer email'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter new engineer github'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter new intern name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter new intern ID',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter new intern email',

    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter new intern college'
    }
]

































// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
