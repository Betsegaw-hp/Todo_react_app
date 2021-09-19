import React, { createContext, useEffect, useReducer } from 'react';
import  useUpdateEffect  from '../CustomHooks/useUpdateEffect'
import {  taskAdded, taskCompleted, taskFaild } from '../Reducers/actions';
import TaskReducer from '../Reducers/TaskReducer';
import { updateDB, read_DB } from '../DB/indexedDB';

export const TaskContext = createContext();

const AddTaskContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const [completedTasks, dispatchCompletion] = useReducer(TaskReducer, []);
  const [faildTasks, dispatchFailure] = useReducer(TaskReducer, []);


  useEffect(()=> {
    // Works but unstable // needs attention
    ['Tasks', 'Completed_tasks', 'Faild_tasks'].forEach((item, i) => {
      read_DB(item)
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
    updateDB([tasks, completedTasks, faildTasks])
  }, [tasks, completedTasks, faildTasks])
 

   
  return (
    <TaskContext.Provider value={{tasks,completedTasks,faildTasks,dispatch, dispatchCompletion, dispatchFailure}}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default AddTaskContextProvider;