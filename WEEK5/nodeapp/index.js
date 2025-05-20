const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const notesPath = path.join(__dirname, 'notes.json');

if (!fs.existsSync(notesPath)) {
  fs.writeFileSync(notesPath, JSON.stringify([]));
}

function saveNote(title, content) {
  const notes = getNotes();
  const note = {
    id: crypto.randomUUID(),
    title,
    content
  };
  notes.push(note);
  fs.writeFileSync(notesPath, JSON.stringify(notes, null, 2));
  console.log(`Note "${title}" saved.`);
}

function getNotes() {
  return JSON.parse(fs.readFileSync(notesPath, 'utf-8'));
}

function listNotes() {
  const notes = getNotes();
  console.log("Your Notes:");
  notes.forEach(note => {
    console.log(`- [${note.id}] ${note.title}`);
  });
}

function deleteNote(id) {
  const notes = getNotes();
  const updated = notes.filter(note => note.id !== id);
  fs.writeFileSync(notesPath, JSON.stringify(updated, null, 2));
  console.log(` Note with ID ${id} deleted.`);
}


function showExecutionOrder() {
  console.log("\nExecution order demo:");

  process.nextTick(() => {
    console.log("process.nextTick");
  });

  setTimeout(() => {
    console.log("setTimeout");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate");
  });

  console.log("Synchronous code");
}


const [,, cmd, ...args] = process.argv;

switch (cmd) {
  case 'add':
    const [title, content] = args;
    if (!title || !content) {
      console.log("Usage: node index.js add \"Title\" \"Content\"");
    } else {
      saveNote(title, content);
    }
    break;

  case 'list':
    listNotes();
    break;

  case 'delete':
    const [id] = args;
    if (!id) {
      console.log(" Usage: node index.js delete <id>");
    } else {
      deleteNote(id);
    }
    break;

  case 'demo':
    showExecutionOrder();
    break;

  default:
    console.log("Usage:");
    console.log("  node index.js add \"Title\" \"Content\"");
    console.log("  node index.js list");
    console.log("  node index.js delete <id>");
    console.log("  node index.js demo");
}
