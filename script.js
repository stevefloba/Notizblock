

let notes = ['banana', 'rasen mähen'];

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];
        contentRef.innerHTML += getNoteTemplate(note);
    }
}

function getNoteTemplate(note){
    return `<p>+ ${note}</p>`;
}

// Notizen hinzufügen

function addNote(){
let noteInputRef = document.getElementById('note_input');
let noteinput = noteInputRef.value;

notes.push(noteinput);

renderNotes()

noteInputRef.value = "";
}








// Notizen löschen
// Notizen archivieren