//  GLOBALS
const PREFIX = 'HAPPY-'
let db, DB_version = 1;

// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  
// window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

// window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;



export function updateDB(tasks) {
    if(!window.indexedDB) { return console.log('indexedDB not supported')}
    const DBopenReq = window.indexedDB.open(`HAPPY-TODO-App`, DB_version)
    DBopenReq.onerror = (e) => {
            //  on error
            db = e.target.result;
            
            console.warn(db)
        }
    DBopenReq.onupgradeneeded = (e) => {
        // on upgradeneeded
        db = e.target.result;
        db.onerror = function(event) {
        alert(`Error loading database: ${event.target.error}`);
    }
        
    // create objecetStore 
    
    const DBtasks = db.createObjectStore('Tasks', {keyPath: 'id'})
    const DBcompletedTasks = db.createObjectStore('Completed_tasks', {keyPath: 'id'})
    const DBfaildTasks = db.createObjectStore('Faild_tasks', {keyPath: 'id'})
    
    DBtasks.createIndex('id', 'id', { unique : true})
    DBtasks.createIndex('title', 'title', { unique : false})
    DBcompletedTasks.createIndex('id', 'id', { unique : true})
    DBcompletedTasks.createIndex('title', 'title', { unique : false})
    DBfaildTasks.createIndex('id', 'id', { unique : false})
    DBfaildTasks.createIndex('title', 'title', { unique : false})
    console.log('obJect Store created')
    } 
        DBopenReq.onsuccess = e => {
        db = DBopenReq.result;
        console.log('success', db);

        ['Tasks', 'Completed_tasks', 'Faild_tasks'].forEach((e,i) => {
            addToDB(e, tasks[i] )
        })
    //   addToDB('Tasks', tasks)
    //   addToDB('Completed_tasks', completedTasks)
    //   addToDB('Faild_tasks', faildTasks)
    }
    
    function addToDB(storeName , Item ) {
        let tx = db.transaction(storeName, 'readwrite')
    
        tx.oncomplete = e => {
        console.log('tx completed', tx)
        }
        tx.onerror = e => {
        console.log('tx on error', tx)
        }
    
        let objectStore = tx.objectStore(storeName), oSRequest;
        //  clear the store
        let oSclearReq = objectStore.clear();
            oSclearReq.onsuccess = () => {
            console.log('store cleared')
            }
        Item.forEach(task => {
            oSRequest = objectStore.put(task);
        oSRequest.onsuccess = e => {
        console.log(task.id, 'added successfuly')
        }
        });
        
    }
}

export function read_DB(label) {
    return new Promise((resolve, reject) => {
      const DB = indexedDB.open(`HAPPY-TODO-App`, DB_version)
      DB.onupgradeneeded = (e) => {
        db = e.target.result
    
        const DBtasks = db.createObjectStore('Tasks', {keyPath: 'id'})
        const DBcompletedTasks = db.createObjectStore('Completed_tasks', {keyPath: 'id'})
        const DBfaildTasks = db.createObjectStore('Faild_tasks', {keyPath: 'id'})
      
        DBtasks.createIndex('id', 'id', { unique : true})
        DBtasks.createIndex('title', 'title', { unique : false})
        DBcompletedTasks.createIndex('id', 'id', { unique : true})
        DBcompletedTasks.createIndex('title', 'title', { unique : false})
        DBfaildTasks.createIndex('id', 'id', { unique : false})
        DBfaildTasks.createIndex('title', 'title', { unique : false})
      }
      DB.onsuccess = () => {
        db = DB.result
        console.log('succes reading' , label)
    
        const tx = db.transaction(label)
        const objectStore = tx.objectStore(label)
        const req = objectStore.getAll()
        req.onsuccess = (e) => {
          // console.log(req.result)
          resolve(req.result) 
        } 
      }
      DB.onerror = (e) => {
        db = e.target.result;
        reject(db)
      }
    })
  }