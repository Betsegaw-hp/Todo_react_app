import React, { useContext } from 'react';
import { TaskContext } from '../../Contexts/addTaskContext';
import CompletedTasks from './D-portals/completed-tasks';
import FaildTasks from './D-portals/faild-tasks';
import FormCard from './FormCard';
import ListCard from './ListCard';

function Dashboard() {
  const { tasks } = useContext(TaskContext);

  return(
    <section id="Dashboard" className="Dashboard">
    <nav>
      <span>DashBoard</span>
      <div className="nav-btn-wraper">
        <CompletedTasks />
        <FaildTasks />
      </div>
    </nav>
    <FormCard />
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