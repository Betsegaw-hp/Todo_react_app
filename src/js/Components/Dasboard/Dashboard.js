import React, { useContext } from 'react';
import { TaskContext } from '../../Contexts/addTaskContext';
import CompletedTasks from './D-portals/completed-tasks';
import FaildTasks from './D-portals/faild-tasks';
import FormCard from './FormCard';
import ListCard from './ListCard';

const MsgHolder = () => {
  return (
    <div className="msg-holder">
      <h4>You don't have any task on progress.</h4>
      <p>What do you want to do today?</p>
    </div>
  )
}
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
      {tasks.length > 0 ? 
      tasks.map(task => <ListCard key={task.id} 
                                  title={task.title} 
                                  label={task.label}
                                  sDate={task.startDate}
                                  dLine={task.deadline}
                                  id={task.id}/>):
                                  <MsgHolder />}
    </ul>
    </section>
  )
}

export default Dashboard;