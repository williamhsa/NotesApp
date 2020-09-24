const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
  return 'Your notes...'
}

const addNote = function (title, body) {
  const notes = loadNotes()
  // console.log('notes: ', notes);

  const duplicatedNotes = notes.filter(note => note.title === title)
  // console.log('duplicatedNotes', duplicatedNotes);

  if (duplicatedNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    // console.log('notes two: ', notes);
    saveNotes(notes)
    console.log(chalk.green.inverse.bgBlackBright.bold('New note added!'))
  } else {
    console.log(chalk.red.inverse.bgBlackBright.bold('Note title taken!'))
  }
}

const removeNote = title => {
  const notes = loadNotes()
  // console.log('notes', notes);
  const notesToKeep = notes.filter(note => note.title !== title)
  // console.log('notesToKeep', notesToKeep);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse.bgBlackBright.bold('Note removed!'));
  } else {
    console.log(chalk.red.inverse.bgBlackBright.bold('Note not found!'));
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }

}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}