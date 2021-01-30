import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../Contexts/addTaskContext';
import Modal from './Modal';

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
     startDate.getTime(); 
     deadLine.getTime();

 
    // One day Time in ms (milliseconds) 
    const one_day = 1000 * 60 * 60 * 24 ;

   const TimeIntervalInmilli = deadLine - startDate;
    
    const TimeIntervalInDay = Math.floor(TimeIntervalInmilli / one_day);

   return showTimeGap(TimeIntervalInDay)
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
