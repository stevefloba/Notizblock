

let notes = ['banana', 'rasen mähen'];

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteinput = noteInputRef.value;

    notes.push(noteinput);

    renderNotes();

    noteInputRef.value = "";
}

function deleteNote(indexNote) {
    notes.splice(indexNote, 1);
    renderNotes();
}







// Notizen archivieren