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
  const editTask = (id) => {
    const editedTask = tasks.filter((task)=> {
      return task.id === id
    })
    console.table(editedTask)
  }
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
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