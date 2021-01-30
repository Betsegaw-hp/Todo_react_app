import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../Contexts/addTaskContext';
import Modal from './Modal';
import trackTimeInterval from './timeTracker';

const ListCard = (props) => {
  const { removeTask, taskCompleted} = useContext(TaskContext);

  const {
    title,
    label,
    sDate,
    dLine,
    id
  } = props;
  const [timeGap, setTimeGap] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()=> {
    let startDate = new Date(sDate);
    let deadLine = new Date(dLine);
    startDate = startDate.setHours(0,0,0,0,0); 
    deadLine = deadLine.setHours(0,0,0,0,0);
    const UPDATE_TIME = 300000 ; // 5 min
    const TimeIntervalInDay = trackTimeInterval(deadLine, startDate);

   setInterval(() => {
    const TimeIntervalInDayloop = trackTimeInterval(deadLine, startDate); 
    return showTimeGap(TimeIntervalInDayloop)
   }, UPDATE_TIME);
    
    // first render without Interval
     return  showTimeGap(TimeIntervalInDay);
    
  },[sDate, dLine])

  

  function showTimeGap(day) {
      if( day < 0) return setTimeGap('Expired');
      
      return setTimeGap(`${day !== 0 ? day + ' day left': 'less than a day'}`);
  } 

  const handleRemoveClick = (e) => {
    removeTask(id)
  }
  const handleEditClick = (e) => {
     setIsModalOpen(true);
  }
  const handleCompleteClick = () => {

  }

  return (
    <li className="list-card">
        <h3 className="title">{title}</h3>
        <div className="description">
          <p>{label}</p>
        </div>
        <div className="show-time">
        <h4>Start Date: <span className="start-date">{sDate}</span> </h4> 
        <h4>Dead line: <span className="dead-date">{dLine}</span></h4> 
        </div>
        <div className="counter">
            <i><span className="counter-time">{timeGap}</span></i>
          </div>
        <button className="edit-btn warning-btn"
                onClick={handleEditClick}>Edit</button>
        <button className="remove-btn danger-btn"
                onClick={handleRemoveClick}>Remove</button>
        <button className="done-btn success-btn"
                onClick={handleCompleteClick}>Completed</button>       
                {/* expermental */}
       <Modal modalOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              sDate={sDate}
              dLine={dLine}
              title={title}
              label={label}
              id={id} />
    </li>
  )
}

export default ListCard;
