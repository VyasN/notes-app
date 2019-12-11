const fs = require('fs')
const chalk = require('chalk')

const error = chalk.bold.red
const success = chalk.bold.green
const message = chalk.blue
const readNotes = (title) => {
  const notes = loadNotes()
  const findNote = notes.find((note) => {
    if (note.title === title) {
      return note;
    }
  })
  if (findNote) {
    console.log(success.dim('title is: ') + success.inverse.bold(findNote.title));
    console.log(message('body is: ' + findNote.body));
  } else {
    console.log(error("Note not found!"));
  }
}
const addNotes = function (title, body) {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('New note added!')
  } else {
    console.log('Note title taken!');
  }
}
const removeNotes = function (title) {
  const notes = loadNotes()
  const keepNotes = notes.filter(function (note) {
    return note.title !== title
  })
  if (notes.length !== keepNotes.length) {
    console.log('removed a note successfylly!');
    saveNotes(keepNotes)
  } else {
    console.log("Can't able to remove note ");

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
  addNote: addNotes,
  removeNotes: removeNotes,
  readNotes: readNotes
}