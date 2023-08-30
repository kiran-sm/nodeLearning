const chalk = require('chalk');
const yargs = require('yargs/yargs');
const getNotes = require('./notes.js'); 

console.log(process.argv);
console.log(yargs.argv);
yargs.version('1.1.0')