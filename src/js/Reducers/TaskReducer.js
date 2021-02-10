import uuid from 'uuid/dist/v4';
import * as actionType from './actionTypes';

// DRY detected, Optimization needed

const taskReducer = (state, action) => {
  switch (action.type) {
      // call from dispatch
    case actionType.TASK_ADDED: // (only valid on dispatch)
      return [...state, { 
         title: action.payload.title,
         label: action.payload.label,
         deadline: action.payload.deadline,
         startDate: action.payload.startDate, id: uuid()}]

    case actionType.TASK_EDITED: //  (only valid on dispatch)
      const editedTasks = state.map((task, i) => {
        if(task.id === action.payload.id) {
          return state[i] = { 
            title: action.payload.title,
            label: action.payload.label,
            deadline: action.payload.deadline,
            startDate: action.payload.startDate, id: uuid()}
      }
      return task
    })
    state = editedTasks
    return state
    case actionType.TASK_REMOVED: //  (only valid on dispatch)
      return state.filter(task => task.id !== action.payload.id)


      // call from dispatchCompletion
    case actionType.TASK_COMPLETED:{ //  (only valid on dispatchCompletion)
      const filteredTask = (action.payload.tasks).find(task => task.id === action.payload.id)
      return [...state, filteredTask]
      }

    case actionType.C_T_REMOVED: // (only valid on dispatchCompletion)
      return state.filter(task => task.id !== action.payload.id)


      // call from dispatchFailure
    case actionType.TASK_FAILD: { // (only valid on dispatchFailure)
      const filteredTask =(action.payload.tasks).find(task => task.id === action.payload.id)
      return [...state, filteredTask]
    }
    case actionType.F_T_REMOVED: // (only valid on dispatchFailure)
      return state.filter(task => task.id !== action.payload.id)

    default:
      return state
  }
}

export default taskReducer