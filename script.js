
let notesTitles = ['Ba', 'Aufgabe'];
let notes = ['banana', 'rasen mähen'];

let trashNotesTitles = [];
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
    return `<p>+ title: ${notesTitles[indexNote]} ->  ${notes[indexNote]}<button onclick="pushNoteToTrash(${indexNote})">🗑️</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ title: ${trashNotesTitles[indexTrashNote]} ->   title: ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">❌</button></p>`;
}


function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteinput = noteInputRef.value;

    notes.push(noteinput);

    renderNotes();

    noteInputRef.value = "";
}

function pushNoteToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1); // besser(?): let trashNote = notes.splice(indexNote, 1)[0];
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    renderNotes();
    renderTrashNotes();
}






// Notizen archivieren