// //  GLOBALS
// const PREFIX = 'HAPPY-'
// let db, DB_version = 1;

// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  
// window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

// window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

// if(!window.indexedDB) { return console.log('indexedDB not supported')}

// class DB {
//   constructor(DB_name, DB_version) {
//     this.DB_name = DB_name
//     this.DB_version = DB_version
//   }
//   get open() {
//     return this.DB_open()
//   }
//   DB_open() {
//     return new Promise(
//       (resolve, reject) => {
//         const DBopenReq = window.indexedDB.open(DB_name, DB_version)
//         DBopenReq.onerror = (e) => {
//               //  on error
//               db = e.target.result;
              
//               reject(db)
//             }
//         DBopenReq.onupgradeneeded = (e) => {
//           // on upgradeneeded
//           db = e.target.result;
//           db.onerror = function(event) {
//             alert(`Error loading database: ${event.target.error}`);
//             reject(event)
//         }
          
//         // create objecetStore 
      
//         const DBtasks = db.createObjectStore('Tasks', {keyPath: 'id'})
//         const DBcompletedTasks = db.createObjectStore('Completed_tasks', {keyPath: 'id'})
//         const DBfaildTasks = db.createObjectStore('Faild_tasks', {keyPath: 'id'})
      
//         DBtasks.createIndex('id', 'id', { unique : true})
//         DBtasks.createIndex('title', 'title', { unique : false})
//         DBcompletedTasks.createIndex('id', 'id', { unique : true})
//         DBcompletedTasks.createIndex('title', 'title', { unique : false})
//         DBfaildTasks.createIndex('id', 'id', { unique : false})
//         DBfaildTasks.createIndex('title', 'title', { unique : false})
//         console.log('obJect Store created')
//       } 
//         DBopenReq.onsuccess = e => {
//           db = DBopenReq.result;
//           console.log('success', db)
      
//           // addToDB('Tasks', tasks)
//           // addToDB('Completed_tasks', completedTasks)
//           // addToDB('Faild_tasks', faildTasks)
//         }
//       }
//     );
//   };

// }