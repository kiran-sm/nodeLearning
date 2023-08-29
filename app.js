const chalk = require('chalk');
const getNotes = require('./notes.js'); 

const command = process.argv[2]

if (command === 'add') {
    console.log('adding note');
} else {
    console.log('diffrent one');
}