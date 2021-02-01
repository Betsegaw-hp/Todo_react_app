import React, { createContext, useState } from 'react';
import uuid from 'uuid/dist/v4';
export const TaskContext = createContext();

const AddTaskContextProvider = (props) => {
  const [tasks , setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  

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
    
    return setTasks(tasks.filter(task => task.id !== id))
  }
    console.table( completedTasks)
  const removeCompletedTask = (id) => {
    return setCompletedTasks(completedTasks.filter(task => task.id !== id))
  }  
   
  
  return (
    <TaskContext.Provider value={{tasks,completedTasks, addTask, editTask, removeTask, taskCompleted, removeCompletedTask}}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default AddTaskContextProvider;