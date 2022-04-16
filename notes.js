const fs= require('fs')
const chalk= require('chalk')

//These are APIs
//change function5
// const getNotes= ()=> 'Your notes....'


///////////////////////////////////////////////////
//Adding a note
//change function6
const addNote=(title, body) =>{
    //first load all the array of notes
    const notes= loadNotes()
//Check if the title of the new node is already taken

//change function7
    //const duplicateNote= notes.filter((note) => note.title === title)
    //if(duplicateNote.length === 0)

     const duplicateNote= notes.find((note) => note.title === title)
    //If no duplicate
     //debugger
    // console.log(duplicateNote)
    if(!duplicateNote){
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

//change function8
const saveNotes=(notes)=>{
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}
//change function9
const loadNotes= ()=>{

    try{
        const dataBuffer= fs.readFileSync('notes.json')
        const dataJSON= dataBuffer.toString()
        //console.log(JSON.parse(dataJSON))
        return JSON.parse(dataJSON)
        //the returned value is an array of javaScript objects
    } catch(e){
        return []
    }
    
}

///////////////////////////////////////////////////////////////
//removing a note
//change function10
const removeNote= (title)=>{
    const notes= loadNotes()
    
    //notes and filteredNote are array of objects
//change function 11
     const filteredNote= notes.filter((note)=> note.title !== title)

    //const filteredNote= notes.find((note) => note.title !== title)
 
    //My solution
    //previosly if(filteredtNote.length === notes.length)
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
    
    notes.forEach((note) =>
    { console.log(note.title)
     // console.log(note)  
    })
}

/////////////////////////////////

//reading a note
const readNote= (title)=>{
    const notes= loadNotes()
    const desiredNote= notes.find((note) => note.title === title)
    //  {
    //     if(title.note === title){
    //         return note
    //     }
    // })
    if(desiredNote){
        console.log(chalk.inverse(desiredNote.title))
        console.log(desiredNote.body)
    }else{
        console.log(chalk.red.inverse('Note not found!'))
    }
    
}
module.exports={
    //getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote: readNote
}