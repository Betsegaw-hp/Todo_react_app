import React, { createContext, useReducer } from 'react';
import TaskReducer from '../Reducers/TaskReducer';

export const TaskContext = createContext();

const AddTaskContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const [completedTasks, dispatchCompletion] = useReducer(TaskReducer, []);
  const [faildTasks, dispatchFailure] = useReducer(TaskReducer, []);
 
  return (
    <TaskContext.Provider value={{tasks,completedTasks,faildTasks,dispatch, dispatchCompletion, dispatchFailure}}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default AddTaskContextProvider;