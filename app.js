require('./util')
const fs = require('fs') 
const validator = require('validator')

fs.writeFileSync('notes.txt','This file was created by node js Kiran')
fs.appendFileSync('notes.txt',' SM')
 console.log('app.js');

 console.log(validator.isEmail('asdasd.com'));
 console.log(validator.isFloat('ar'));