const validator = require('validator')
const chalk = require('chalk');
// const add = require('./utils')
// const getNotes = require('./notes')
//
// console.log(add(1,1))
//
// const resultGetNotes = getNotes()
// const success = chalk.keyword('green')
// const error = chalk.bold.red
//
// console.log(resultGetNotes)
//
// console.log(validator.isEmail('will@gmail.com'))
// console.log(validator.isURL('https://mead.io'))
// console.log(success('Success!'))
// console.log(error('Error!'))
// console.log(chalk.blue.inverse.bgRed.bold('Hello World!'))

//Getting input from users
console.log(process.argv)
// console.log(process.argv[2])

const command = process.argv[2]

if (command === 'add') {
  console.log('Adding note!')
} else if (command === 'remove') {
  console.log('Removing note!')
}

/*
cada modulo js possui seu proprio escopo

*/