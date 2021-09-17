let db;
const PREFIX = 'HAPPY-'

// window.addEventListener('load', createDB)
export function createDB() {

  this.open = () => {
    const dbOpenRequest = indexedDB.open(`${PREFIX}TODO-App`, 1)

    // onSuccess
    dbOpenRequest.onsuccess = e => {
      alert(`success called `);
      
      db = dbOpenRequest.result;
      this.read()
    }
    // onupgradeneeded
    dbOpenRequest.onupgradeneeded = e => {
      alert('upgradeNeeded called')
       db = e.target.result;
  
        db.onerror = function(event) {
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
    dbOpenRequest.onerror = e => {
      alert(`Error: ${e.target.error}`)
    }
  }

  this.read = (objectStoreName) => {
    let transaction = db.transaction(objectStoreName, 'readonly');
    let objectStore = transaction.objectStore(objectStoreName);
  
      
    let getRequest = objectStore.getAll()
    getRequest.onsuccess = e => {
      const result = e.target.result;
      console.log(result)
      return result;
    }
  }
  //  add Item
 this.add = (objectStoreName, Item) => {
  const transaction= db.transaction([objectStoreName], 'readwrite')
 

  transaction.oncomplete = e => {
    console.log('transaction completed')
  }
  transaction.onerror = function() {
    console.error('Transaction not opened due to error: ' + transaction.error);
   };
 
    // call an object store that's already been added to the database
    let objectStore;
    Item.forEach(item => {
      objectStore = transaction.objectStore(objectStoreName).add(item);
    });

    // Make a request to add our newItem object to the object store
    objectStore.onsuccess = function(event) {

      // report the success of our request
      // (to detect whether it has been succesfully
      // added to the database, you'd look at transaction.oncomplete)
      console.info('Request successful');
    }
 }
 }
 const CreateDB = new createDB()
 export default CreateDB;