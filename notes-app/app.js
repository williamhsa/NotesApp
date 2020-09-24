const yargs = require('yargs')
const notes = require('./notes')

//Getting input from users
// console.log(process.argv)

//Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list
// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // console.log('Title: ' + argv.title)
    // console.log('\nDescription: ' + argv.body)
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log('Removing note... waiting a second...')
    notes.removeNote(argv.title)
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Read note with a title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: () => notes.listNotes()
})

yargs.parse()
// console.log(yargs.argv)
// console.log(process.argv[2])

// console.log(yargs.argv)

// const command = process.argv[2]

// if (command === 'add') {
//   console.log('Adding note!')
// } else if (command === 'remove') {
//   console.log('Removing note!')
// }

/*
cada modulo js possui seu proprio escopo

*/