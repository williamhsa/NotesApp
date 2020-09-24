const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')
const add = require('./utils')
const notes = require('./notes')

// fs.writeFileSync('notes.txt', 'My name is William.')
fs.appendFileSync('notes.txt', ' I am learning about nodejs.')

console.log(add(1,1))

const resultGetNotes = notes.getNotes()
const success = chalk.keyword('green')
const error = chalk.bold.red

console.log(resultGetNotes)

console.log(validator.isEmail('will@gmail.com'))
console.log(validator.isURL('https://mead.io'))
console.log(success('Success!'))
console.log(error('Error!'))
console.log(chalk.blue.inverse.bgRed.bold('Hello World!'))