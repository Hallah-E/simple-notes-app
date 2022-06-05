const chalk= require('chalk')
const yargs= require('yargs')
const notesUtilities= require('./notes.js')
 
//creat add command
yargs.command({
    command:'add',
    describe:'Add a new note!',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'The note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtilities.addNote(argv.title, argv.body)
        
    }
})

// create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note!',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtilities.removeNote(argv.title)
     }
})

//challenge wire up list command
//1- Creat and export listNotes from note.js
// "Your notes" using chalk
// print note title for each note
//2- Call listNotes from command handler
//3- Test your work

// create list command
yargs.command({
    command:'list',
    describe:'Listing your notes!',
    handler(){
        notesUtilities.listNotes()
    }
})

// create read command
yargs.command({
    command:'read',
    describe:'Read a note!',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtilities.readNote(argv.title)
    }
})

// the next two commands do equivalnt functionality
yargs.parse()
//console.log(yargs.argv)

