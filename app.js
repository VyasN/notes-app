const yargs = require('yargs')
const note = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//  yargs commands to add, remove, read , list

//  create add command
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
  handler: function (argv) {
    note.addNote(argv.title, argv.body)
  }
})

//  create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    note.removeNotes(argv.title)
  }
})

//  create read command
yargs.command({
  command: 'read',
  describe: 'read a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    note.readNotes(argv.title)
  }

})

//  create list command
yargs.command({
  command: 'list',
  describe: 'list notes',
  handler: function () {
    console.log('Listing all notes!')
  }
})


yargs.parse()