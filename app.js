const chalk= require('chalk')
const yargs= require('yargs')
const notesUtilities= require('./notes.js')

// const msg= notesUtilities.getNotes()
// console.log(msg) 

//  console.log(process.argv[2])
//console.log(process.argv)

//before yargs
// const command =  process.argv[2]
// if(command === 'add'){
//     console.log('Adding note!')
// }else if(command === 'remove'){
//     console.log('Removing note!')
// }


//after yargs
// Customize yargs' version
//yargs.version('1.1.0')

//challenge l22: Refactor all functions
//1. If a function is a method, use ES6 method definition syntax
//2. Otherwise, use most consice arrow function possible
//3. Test your work

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
    //change function1
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
    //change function2
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
    //change function3
    handler(){
        notesUtilities.listNotes()
        //console.log('Listing out all notes')
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
    //change function4
    handler(argv){
        notesUtilities.readNote(argv.title)
    }
})
// the next two commands do equivalnt functionality
yargs.parse()
//console.log(yargs.argv)



















 // sed3
  // Compose multiple styles using the chainable API
 // console.log(chalk.bold.black.underline.bgBlue('Success!'))
 //#################################
//  console.log(chalk.red.bold.underline.bgGreen('hallah'))
//  console.log(chalk.yellow.bold('Hallah ') + chalk.blue.bold('Elhassan') + chalk.green.bold('Ali'))

//  ##########################
// const validator= require('validator')

// console.log(validator.isEmail('halla.alhassan@gmail.com'))
// #############################