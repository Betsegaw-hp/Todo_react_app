import React, { createContext, useState } from 'react';
import uuid from 'uuid/dist/v4';
export const TaskContext = createContext();

const AddTaskContextProvider = (props) => {
  const [tasks , setTasks] = useState([]);
  // const currentDate = new Date();

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
  const taskCompleted = () => {
    
  }
  return (
    <TaskContext.Provider value={{tasks, addTask, editTask, removeTask, taskCompleted}}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default AddTaskContextProvider;