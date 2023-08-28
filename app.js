const chalk = require('chalk');
require('./util')
const fs = require('fs') 

fs.writeFileSync('notes.txt','This file was created by node js Kiran')
fs.appendFileSync('notes.txt',' SM')
const getNotes = require('./notes.js') 
console.log('app.js');

console.log(chalk.blue('Hello world!'));
console.log(chalk.bold.green.inverse('Hai'))