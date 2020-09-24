const fs = require('fs')
const chalk = require('chalk')

const addNote = function (title, body) {
  const notes = loadNotes()
  // console.log('notes: ', notes);

  // const duplicatedNotes = notes.filter(note => note.title === title)
  // filter ira visitar todas posições do array, podemos usar find no lugar, pois ira para na primeira vez que
  // encontrar um elemento duplicado.
  // console.log('duplicatedNotes', duplicatedNotes);
  const duplicatedNote = notes.find(note => note.title === title)
  // if (duplicatedNotes.length === 0) {
  if (!duplicatedNote) {
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

const listNotes = () => {
  console.log(chalk.inverse('\nYour notes'))
  const notes = loadNotes()
  notes.forEach( note => console.log('Title: ' + note.title + ' || Body: ' + note.body + '\n'))
}

const readNote = title => {
  // console.log('title', title);
  const notes = loadNotes()
  const noteFind = notes.find(note => note.title === title)

  if (noteFind) {
    console.log(chalk.yellow.inverse.bgBlackBright.bold('Title: ' + noteFind.title + ' - Body: ' + noteFind.body))
  } else {
    console.log(chalk.redBright('Note not found!'))
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}