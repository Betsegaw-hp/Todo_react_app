import React, { useContext, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import error_btn from '../../../../media/assignment_late-black-24dp.svg';
import remove_btn from '../../../../media/cancel.svg';
import { TaskContext } from '../../../Contexts/addTaskContext';

const OVERLAY_SHADOW = {
  position: 'fixed',
  top: 0, left: 0,right:0,bottom:0,
  backgroundColor: 'rgba(0,0,0,0.6)',
  zIndex: 1000
}

const FaildTasksLists = ({tasks, modalOpen, removeTask, onClose}) => {

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
       <h3 className="faild-task-title">Faild Tasks</h3>
      <ul className="completed-tasks-ul">
        {tasks && tasks.map(task=> (
          <li key={task.id}  id={task.id}      className="completed-task-list"
          ref={listElement}>
            <div className="task-card">
              <h3 className="task-title">{task.title}</h3>
              <p className="task-label">{task.label}</p>
              <span className="task-date">{task.startDate} - {task.deadline}</span>
            </div>
            <div className="remove-btn">
              <img src={remove_btn} alt="remove button"
               onClick={() => handleRemoveClick(task.id)}/>
            </div>
          </li>
        ))}
      </ul>
      {`${tasks}` === `${[]}` &&
       <span className="emptyText"> Nothing here. <span>Good Job!</span></span>}
     </div>
    </>,
  document.getElementById('portal')
  )
} 

const FaildTasks = () => {
  const [isOpen , setIsOpen] = useState(false);
  const {faildTasks, removeFaildTask} = useContext(TaskContext);

  const count = faildTasks.length;
  return (
    <>
      <div className="faild-tasks"
           onClick={(e) => setIsOpen(!isOpen)}>
          <img src={error_btn} alt="faild tasks" />
          <span className='list-counter'>{count}</span>
      </div>
      <FaildTasksLists tasks={faildTasks}
                       removeTask={removeFaildTask}
                       modalOpen={isOpen}
                       onClose={(e) => setIsOpen(!isOpen)}/>
    </>
  )
}

export default FaildTasks;