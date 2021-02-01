import React, { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import remove_btn from '../../../../media/cancel.svg';
import complete_btn from '../../../../media/done_all-black-24dp.svg';
import { TaskContext } from '../../../Contexts/addTaskContext';

 const OVERLAY_SHADOW = {
   position: 'fixed',
   top: 0, left: 0,right:0,bottom:0,
   backgroundColor: 'rgba(0,0,0,0.6)',
   zIndex: 1000
 }

function CompletedTasksLists({tasks, modalOpen, onClose})  {

    if(!modalOpen) return null;
   
   return createPortal(
     <>
     <div style={OVERLAY_SHADOW} onClick={onClose}></div>
     <div className="completed-tasks-container">
      <ul className="completed-tasks-ul">
        {tasks && tasks.map(task=> (
          <li key={task.id} className="completed-task-list">
            <div className="task-card">
              <h3>{task.title}</h3>
              <h6>{task.label}</h6>
            </div>
            <img src={remove_btn} alt="remove button"/>
          </li>
        ))}
      </ul>
     </div>
     </>,
    document.getElementById('portal')
     
   )
 }
 const CompletedTasks = () => {
   const [isOpen , setIsOpen] = useState(false);
   const { completedTasks } = useContext(TaskContext)


  return (
    <>
      <div className="completed-tasks"
           onClick={(e) => setIsOpen(!isOpen)}>
            <img src={complete_btn} alt="complete tasks"/>
      </div>
      <CompletedTasksLists tasks={completedTasks}
                           modalOpen={isOpen}
                           onClose={(e) => setIsOpen(!isOpen)}/>
     
    </>
  )
}
 

export default CompletedTasks;