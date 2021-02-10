import React, { createContext, useReducer } from 'react';
import TaskReducer from '../Reducers/TaskReducer';

export const TaskContext = createContext();

const AddTaskContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const [completedTasks, dispatchCompletion] = useReducer(TaskReducer, []);
  const [faildTasks, dispatchFailure] = useReducer(TaskReducer, []);

  // core state
/*
  const [tasks , setTasks] = useState([]);
  // additional states
  const [completedTasks, setCompletedTasks] = useState([]);
  const [faildTasks, setFaildTasks] = useState([]);
  
  
//  main functions
  const addTask = (title, label,deadline, startDate) => {
    setTasks([...tasks, {title, label,deadline, startDate, id: uuid()}])
  }
  console.table(tasks)

  const editTask = (id,title, label,deadline, startDate) => {
    
    const editedTasks = tasks.map((task, i) => {
      if(task.id === id) {
       return tasks[i] = {title, label,deadline, startDate, id: uuid()}
      }
      return task
    })

   setTasks(editedTasks)
  }
  
  const removeTask = (id) => {
   return setTasks(tasks.filter(task => task.id !== id))
  }
  
  const taskCompleted = (id) => {
   const filteredTask = tasks.find(task => task.id === id)
    setCompletedTasks([...completedTasks, filteredTask])
    
    // then remove from main store
    return setTasks(tasks.filter(task => task.id !== id))
  }
    console.table( completedTasks)
    // additional functions
  const removeCompletedTask = (id) => {
    // rid off it once for all
    return setCompletedTasks(completedTasks.filter(task => task.id !== id))
  }  

  const faildTask = (id) => {
    const filteredTask = tasks.find(task => task.id === id)
    setFaildTasks([...faildTasks, filteredTask])

    // then remove from main store
    return setTasks(tasks.filter(task => task.id !== id))
  }
  console.table( faildTasks)
  const removeFaildTask = (id) => {
    // rid off it once for all
    return setFaildTasks(faildTasks.filter(task => task.id !== id))
  }
   */
  
  return (
    // <TaskContext.Provider value={{tasks,completedTasks,
    // faildTasks, addTask, editTask, removeTask, taskCompleted, removeCompletedTask, faildTask, removeFaildTask}}>
    <TaskContext.Provider value={{tasks,completedTasks,faildTasks,dispatch, dispatchCompletion, dispatchFailure}}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default AddTaskContextProvider;