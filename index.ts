#!/usr/bin/evn node
import chalk from "chalk";
// import gradient from "gradient-string";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

const sleep = (ms = 2000) =>
new Promise((resolve, reject) => setTimeout(resolve, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("--Let's start calculation--\n");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.rgb(36, 113, 163)(`
    _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`))
    console.log(
        chalk.rgb(
            155,
            89,
            182
        )(`
        DEVELOP BY NASREEN ZULFIQAR
        `)
    );
}

await welcome();

async function askQuestion() {

    const question = [
        {
            type: "list",
            name: "operator",
            message : chalk.rgb(204, 102, 153)("Which operation you want to perform?: \n"),
            choices: [
                "+ Addition",
                "- Subtraction",
                "* Multiplication",
                "/ Division",
                "^ Power",
            ],
        },
        {
            type: "number",
            name: "num1",
            message: chalk.rgb(255, 153, 51)("Enter value of Number 1: "),
            validate: (answer: number) => {
                //console.log(Number.isNan(answer)); //return false if there is number and return true if string is provided
                //console.log(isNan(answer)); //return false for number
                if (isNaN(answer)) {
                    return chalk.red(`☠☠ Please entre a valid number!!`);
                }
                return true;
            },
        },
        {
            type: "number",
            name: "num2",
            message: chalk.rgb(255, 153, 51)("Enter value of Number 2:"),
            validate: (answer: number) => {
                if (isNaN(answer)) {
                    return chalk.red(`☠☠ Please enter a valid number!!`);
                }
                return true;
            },
        },
    ];
    await inquirer
    .prompt(question)
    .then((answers) => {
        if  (answers.operater == "+ Addition")
        {
            console.log(chalk.rgb(0, 0, 0)(`${answers.num1} = ${chalk.rgb(39, 174, 96)(answers.num1 + answers.num2)}`));
        } else if (answers.operator == "+ Addition")
        {
            console.log(chalk.rgb(39, 174, 96)(`${answers.num1} + ${answers.num2} = ${chalk.rgb(39, 174, 96)(answers.num1 + answers.num)}`));
        } else if (answers.operator == "- Subtaction")
        {
            console.log(chalk.rgb(39, 174, 96)(`${answers.num1} - ${answers.num2} = ${chalk.rgb(39, 174, 96)(answers.num1 - answers.num2)}`));
        } else if (answers.operater == "* Multiplication")
        {
            console.log(chalk.rgb(39, 174, 96)(`${answers.num1} * ${answers.num2} = ${chalk.rgb(39, 174, 96)(answers.num1 * answers.num2)}`));
        } else if (answers.operater == "/ Dividion")
        {
            console.log(chalk.rgb(39, 174, 96)(`${answers.num1} / ${answers.num2} = ${chalk.rgb(39, 174, 96)(answers.num1 / answers.num2)}`))
        } else if (answers.operater == "^ Power")
        {
            console.log(chalk.rgb(39, 174, 96)(`${answers.num1} ^ ${answers.num2} = ${chalk.rgb(39, 174, 96)(Math.pow(answers.num1, answers.num2))}`))
        }
    });
    
}

// await askQuestion();

async function startAgain(){
    do{
        await askQuestion();
        var playAgain = await inquirer
        .prompt({
        type: 'input',
        name: 'restart',
        message: chalk.rgb(204, 102, 153)('Do you want to restart your calculater? Press y or n')    
        })

    }while(playAgain.restart == 'y' || playAgain.restart == 'y' || playAgain.restart == 'yes' || playAgain.restart == 'yes');
}

    
startAgain();
    
