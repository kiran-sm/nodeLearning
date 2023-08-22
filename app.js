require('./util')
const fs = require('fs') 

fs.writeFileSync('notes.txt','This file was created by node js Kiran')
fs.appendFileSync('notes.txt',' SM')
 console.log('app.js');