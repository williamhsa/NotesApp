const add = require('./utils')
const getNotes = require('./notes')

console.log(add(1,1))

const resultGetNotes = getNotes()

console.log(resultGetNotes)

/*
cada modulo js possui seu proprio escopo

*/