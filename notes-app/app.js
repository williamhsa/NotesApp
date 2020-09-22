const validator = require('validator')
const add = require('./utils')
const getNotes = require('./notes')

console.log(add(1,1))

const resultGetNotes = getNotes()

console.log(resultGetNotes)

console.log(validator.isEmail('will@gmail.com'))
console.log(validator.isURL('https://mead.io'))

/*
cada modulo js possui seu proprio escopo

*/