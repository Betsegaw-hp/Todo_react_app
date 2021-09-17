import React, { useContext, useState } from 'react';
import { TaskContext } from '../../Contexts/addTaskContext';
import CompletedTasks from './D-portals/completed-tasks';
import FaildTasks from './D-portals/faild-tasks';
import FormCard from './FormCard';
import ListCard from './ListCard';
import MsgHolder from './MsgHolder';

function Dashboard() {
  const { tasks } = useContext(TaskContext);
  const [showTemplete, setShowTemplete] = useState(false)

  function handleClick() {
    setShowTemplete(true)
  }

  return(
    <section id="Dashboard" className="Dashboard">
    <nav>
      <span>DashBoard</span>
      <div className="nav-btn-wraper">
        <CompletedTasks />
        <FaildTasks />
      </div>
    </nav>
    {showTemplete ? <FormCard /> : <MsgHolder handleClick={handleClick}/>}
    
    <ul className="listCard-continer">
      {tasks.length > 0 && 
      tasks.map(task => <ListCard key={task.id} 
                                  title={task.title} 
                                  label={task.label}
                                  sDate={task.startDate}
                                  dLine={task.deadline}
                                  id={task.id}/>)}
    </ul>
    </section>
  )
}

export default Dashboard;