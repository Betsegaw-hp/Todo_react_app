import React, { useContext, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import remove_btn from '../../../../media/cancel.svg';
import complete_btn from '../../../../media/done_all-black-24dp.svg';
import { TaskContext } from '../../../Contexts/addTaskContext';
import { CompletedTaskRemoved } from '../../../Reducers/actions';

 const OVERLAY_SHADOW = {
   position: 'fixed',
   top: 0, left: 0,right:0,bottom:0,
   backgroundColor: 'rgba(0,0,0,0.6)',
   zIndex: 1000
 }

function CompletedTasksLists({tasks, modalOpen, onClose, removeTask})  {
    
    const listElement = useRef(null);   
       
    if(!modalOpen) return null;

    const handleRemoveClick = (id) => {
      if(listElement)  {
       removeTask(CompletedTaskRemoved(id));
      }
    }
   
   return createPortal(
     <>
     <div style={OVERLAY_SHADOW} onClick={onClose}></div>
     <div className="completed-tasks-container">
       <div className='title-wrapper'>
        <h3 className="completed-task-title">Completed Tasks</h3>
        <button className="danger-btn" onClick={onClose}>Close</button>
       </div>
      <ul className="completed-tasks-ul">
        {tasks.length > 0 && tasks.map(task=> (
          <li key={task.id}  id={task.id}      className="completed-task-list"
          ref={listElement}>
            <div className="task-card">
              <h4 className="task-title">{task.title}</h4>
              <p className="task-label">{task.label}</p>
              <span className="task-date">{task.startDate} - {task.deadline}</span>
            </div>
            <div className="remove-btn">
              <img width="10" height="10" src={remove_btn} alt="remove button" 
              onClick={() => handleRemoveClick(task.id)}/>
            </div>
          </li>
        ))}
      </ul>
      {`${tasks}` === `${[]}` && 
      <span className="emptyText"> Nothing here. <span>But you can make one!</span></span>}
     </div>
     </>,
    document.getElementById('portal')
     
   )
 }
 
 const CompletedTasks = () => {
   const [isOpen , setIsOpen] = useState(false);
   const { completedTasks, dispatchCompletion } = useContext(TaskContext)

   const count = completedTasks.length;

  return (
    <>
      <div className="completed-tasks"
           onClick={(e) => setIsOpen(!isOpen)}>
            <img src={complete_btn} alt="complete tasks"/>
            <span className='list-counter'>{count}</span>
      </div>
      <CompletedTasksLists tasks={completedTasks}
                           removeTask={dispatchCompletion}
                           modalOpen={isOpen}
                           onClose={(e) => setIsOpen(!isOpen)}/>
     
    </>
  )
}
 

export default CompletedTasks;