const fs= require('fs')
const chalk= require('chalk')

//Auxiliary functions
//(1) 
const saveNotes=(notes)=>{
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}
//(2)
const loadNotes= ()=>{

    try{
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON= dataBuffer.toString()
        return JSON.parse(dataJSON) //the returned value is an array of javaScript objects
    } catch(e){
        return []
    }
    
}

//Adding a note
const addNote=(title, body) =>{
    const notes= loadNotes() //first load the array of all notes
    //Check if the title of the new node is already taken:
    //use
    //const duplicateNote= notes.filter((note) => note.title === title)
    //if(duplicateNote.length === 0)
    //or
    const duplicateNote= notes.find((note) => note.title === title)
    
    if(!duplicateNote){ //If no duplicate
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold.inverse('New Note added!'))

    }else{
        console.log(chalk.red.bold.inverse('Note title taken!'))
    }
}

//removing a note
const removeNote= (title)=>{
    const notes= loadNotes()

    const filteredNote= notes.filter((note)=> note.title !== title)

    if(filteredNote.length === notes.length){
        console.log(chalk.red.bold.inverse('No such note to remove!'))
    
    }else{
        saveNotes(filteredNote)
        console.log(chalk.green.bold.inverse('Note removed!"'))      
    }
}

//listing notes
const listNotes= () =>{
    const notes= loadNotes()
    console.log(chalk.bold.green.inverse('Your notes'))
    
    notes.forEach((note) =>{ 
        console.log(note.title) 
    })
}

//reading a note
const readNote= (title)=>{
    const notes= loadNotes()
    const desiredNote= notes.find((note) => note.title === title)
    
    if(desiredNote){
        console.log(chalk.inverse(desiredNote.title))
        console.log(desiredNote.body)
    }else{
        console.log(chalk.red.inverse('Note not found!'))
    }  
}
module.exports={
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote: readNote
}