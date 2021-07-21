//  GLOBALS
const PREFIX = 'HAPPY-'
let db;

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if(!window.indexedDB) { return console.log('indexedDB not supported')}


const dbOpenRequest = window.indexedDB.open(`${PREFIX}todo-app`, 1)

// onerror
dbOpenRequest.onerror = e => {
  console.log('error occured opening db'+e.target.error)
}
// onsuccess
dbOpenRequest.onsuccess = e => {
  console.log('success callled')

   db = dbOpenRequest.result;

   displayTasks()
}
// onupgradeneeded 
dbOpenRequest.onupgradeneeded = e => {
  console.log('upgradeneeded called')
  db = e.target.result;
  
  db.onerror = (event) => {
    alert(`Error loading database: ${event.target.error}`);
  }
  // create objecetStore 

  const tasks = db.createObjectStore('Tasks', {keyPath: 'id'})
  const completedTasks = db.createObjectStore('Completed_tasks', {keyPath: 'id'})
  const faildTasks = db.createObjectStore('Faild_tasks', {keyPath: 'id'})

  tasks.createIndex('id', 'id', { unique : true})
  tasks.createIndex('title', 'title', { unique : false})
  completedTasks.createIndex('id', 'id', { unique : true})
  completedTasks.createIndex('title', 'title', { unique : false})
  faildTasks.createIndex('id', 'id', { unique : false})
  faildTasks.createIndex('title', 'title', { unique : false})
  console.log('obJect Store created')
}

function displayTasks() {
  
}