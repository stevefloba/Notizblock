

let notes = ['banana', 'rasen mähen'];

let trashNotes = [];


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}


function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteinput = noteInputRef.value;

    notes.push(noteinput);

    renderNotes();

    noteInputRef.value = "";
}

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1); // besser(?): let trashNote = notes.splice(indexNote, 1)[0];
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
}







// Notizen archivieren