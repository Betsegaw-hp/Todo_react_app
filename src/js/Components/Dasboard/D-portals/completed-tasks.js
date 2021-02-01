import React, { useContext, useRef, useState } from 'react';
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

function CompletedTasksLists({tasks, modalOpen, onClose, removeTask})  {
    
    const listElement = useRef(null);   
       
    if(!modalOpen) return null;

    const handleRemoveClick = (id) => {
      if(listElement)  {
       removeTask(id);
      }
    }
   
   return createPortal(
     <>
     <div style={OVERLAY_SHADOW} onClick={onClose}></div>
     <div className="completed-tasks-container">
      <ul className="completed-tasks-ul">
        {tasks && tasks.map(task=> (
          <li key={task.id}  id={task.id}      className="completed-task-list"
          ref={listElement}>
            <div className="task-card">
              <h3>{task.title}</h3>
              <p>{task.label}</p>
              <span>{task.startDate} - {task.deadline}</span>
            </div>
            <img src={remove_btn} alt="remove button" onClick={() => handleRemoveClick(task.id)}/>
          </li>
        ))}
      </ul>
      {`${tasks}` === `${[]}` && <pre> Nothing here!</pre>}
     </div>
     </>,
    document.getElementById('portal')
     
   )
 }
 const CompletedTasks = () => {
   const [isOpen , setIsOpen] = useState(false);
   const { completedTasks, removeCompletedTask } = useContext(TaskContext)

   const count = completedTasks.length;

  return (
    <>
      <div className="completed-tasks"
           onClick={(e) => setIsOpen(!isOpen)}>
            <img src={complete_btn} alt="complete tasks"/>
            <span className='list-counter'>{count}</span>
      </div>
      <CompletedTasksLists tasks={completedTasks}
                           removeTask={removeCompletedTask}
                           modalOpen={isOpen}
                           onClose={(e) => setIsOpen(!isOpen)}/>
     
    </>
  )
}
 

export default CompletedTasks;