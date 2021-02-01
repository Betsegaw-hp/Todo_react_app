import React, { useContext, useState } from 'react';
import complete_btn from '../../../../media/done_all-black-24dp.svg';
import { TaskContext } from '../../../Contexts/addTaskContext';

function CompletedTasksLists({tasks})  {
   
   return (
     <div className="completed-tasks-container">
      <ul>
        {tasks && tasks.map(task=> (
          <li key={task.id} className="completed-task">
            <div className="task-card">
              <h3>{task.title}</h3>
              <h4>{task.label}</h4>
            </div>
          </li>
        ))}
      </ul>
     </div>
     
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
     {isOpen && <CompletedTasksLists tasks={completedTasks}/>
     } 
    </>
    
  )
}
 

export default CompletedTasks;
