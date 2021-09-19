import React, { createContext, useEffect, useReducer } from 'react';
import  useUpdateEffect  from '../CustomHooks/useUpdateEffect'
import {  taskAdded, taskCompleted, taskFaild } from '../Reducers/actions';
import TaskReducer from '../Reducers/TaskReducer';

export const TaskContext = createContext();
let db, DB_version = 1;

function intArr(label) {
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

const AddTaskContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const [completedTasks, dispatchCompletion] = useReducer(TaskReducer, []);
  const [faildTasks, dispatchFailure] = useReducer(TaskReducer, []);


  useEffect(()=> {
    // Works but unstable // needs attention
    ['Tasks', 'Completed_tasks', 'Faild_tasks'].forEach((item, i) => {
      intArr(item)
      .then(result =>{
         switch (i) {
           case 0:
             result.forEach(task => {
                dispatch(taskAdded( task.title, task.label,
                                    task.deadline, task.startDate,
                                    task.id))
             })
          
             break;
           case 1:
             result.forEach(task => {
               dispatchCompletion(taskCompleted( task.id,result))
             })
             break;
           case 2:
             result.forEach(task => {
               dispatchFailure(taskFaild(task.id,result))
             })
             break;
           default:
             break;
         }
        })
      .catch(error => console.error(error))
    })
  },[]) 

// no intial render
  useUpdateEffect(() => {
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
  }, [tasks, completedTasks, faildTasks])
 

   
  return (
    <TaskContext.Provider value={{tasks,completedTasks,faildTasks,dispatch, dispatchCompletion, dispatchFailure}}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default AddTaskContextProvider;