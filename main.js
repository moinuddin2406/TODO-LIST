import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("\n\t****Wellcome to MOIN-CLI-TODO****\n"));
let todos = [];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an opration",
            name: "select",
            choices: ["add", "update", "view", "delete", "Exit"],
        });
        if (ans.select === "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add items in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(chalk.blue.bold(todo)));
            // console.log(todos);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add items in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            todos.forEach(todo => console.log(chalk.green.bold(todo)));
            // console.log(todos);
        }
        if (ans.select == "view") {
            console.log("****TO DO LIST*****");
            todos.forEach(todo => console.log(chalk.yellow.bold(todo)));
            // console.log(todos);
            console.log("***************");
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(chalk.red.bold(todo)));
            // console.log(todos);
        }
        if (ans.select === "Exit") {
            console.log(chalk.green.bold("***Thanks for using my todo****"));
            break;
        }
    } while (true);
}
createTodo(todos);
