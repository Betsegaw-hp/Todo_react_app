import * as actionType from './actionTypes';
import uuid from 'uuid/dist/v4';


export const taskAdded = (title, label,deadline, startDate,id = uuid()) => ({
  type: actionType.TASK_ADDED,
  payload: {title, label,deadline, startDate, id}
})

export const taskEdited = (id,title, label,deadline, startDate) => ({
  type: actionType.TASK_EDITED,
  payload: {title, label,deadline, startDate, id}
})

export const taskRemoved = id => ({
  type: actionType.TASK_REMOVED,
  payload: {
    id
  }
})
export const taskCompleted = (id, tasks) => ({
  type: actionType.TASK_COMPLETED,
  payload: {
    id, tasks
  }
})
export const CompletedTaskRemoved = id => ({
  type: actionType.C_T_REMOVED,
  payload: {
    id
  }
})
export const taskFaild = (id, tasks) => ({
  type: actionType.TASK_FAILD,
  payload: {
    id, tasks
  }
})
export const FaildTaskRemoved = id => ({
  type: actionType.F_T_REMOVED,
  payload: {
    id
  }
})


//  TASK_ADDED = "taskAdded";
//  TASK_EDITED = "taskEdited";
//  TASK_REMOVED = "taskRemoved";
//  TASK_COMPLETED = "taskCompleted";
//  C_T_REMOVED = "CompletedTaskRemoved";
//  TASK_FAILD = "taskFaild";
//  F_T_REMOVED = "FaildTaskRemoved";