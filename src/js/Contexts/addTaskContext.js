import React, { createContext, useEffect, useReducer } from 'react';
import TaskReducer from '../Reducers/TaskReducer';

export const TaskContext = createContext();

const AddTaskContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const [completedTasks, dispatchCompletion] = useReducer(TaskReducer, []);
  const [faildTasks, dispatchFailure] = useReducer(TaskReducer, []);
  

  useEffect(()=> {
  
  },[tasks, completedTasks, faildTasks]) 



 let db, DB_version = 1;
 const DBopenReq = indexedDB.open(`HAPPY-TODO-App`, DB_version)
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
    console.log('success', db)
 
    addToDB('Tasks', tasks)
    addToDB('Completed_tasks', completedTasks)
    addToDB('Faild_tasks', faildTasks)
    // readDB('Tasks')
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
   Item.length > 0 && Item.forEach(task => {
       oSRequest = objectStore.put(task);
      oSRequest.onsuccess = e => {
      console.log(task.id, 'added successfuly')
    }
    });
  }
  //  fix area
  // const readDB = (storeName)  => {
  //   return  new Promise((resolve, reject ) => {
  //     let tx = db.transaction(storeName, 'readonly');
  
  //     tx.oncomplete = e => {
  //       console.log('tx completed', tx)
  //     }
  //     tx.onerror = e => {
  //       console.log('tx on error', tx)
  //     }
  
  //     let objectStore = tx.objectStore(storeName);
  //     let  getStoreReq =  objectStore.getAll();
  //     if ( getStoreReq.onsuccess !== null) {
  //        getStoreReq.onsuccess =  e => {
  //         let req = getStoreReq.result;
  //         console.info(storeName, 'readed successfully')
  //         resolve(req)
  //       }
  //     getStoreReq.onerror = e => {
  //     console.warn(e, 'error occured when req' )
  //      }
  //     } else {
  //       reject()
  //     }
  //   })   
  // }

   
  return (
    <TaskContext.Provider value={{tasks,completedTasks,faildTasks,dispatch, dispatchCompletion, dispatchFailure}}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default AddTaskContextProvider;