import React, { useCallback, useContext, useEffect, useState } from 'react';
import complete_btn from '../../../media/add_task-black-24dp.svg';
import delete_btn from '../../../media/delete-black-24dp.svg';
import edit_btn from '../../../media/mode_edit-black-24dp.svg';
import { TaskContext } from '../../Contexts/addTaskContext';
import Modal from './D-portals/Modal';
import trackTimeInterval from './timeTracker';

const ListCard = (props) => {
  const {tasks, removeTask, taskCompleted, faildTask} = useContext(TaskContext);

  const {
    title,
    label,
    sDate,
    dLine,
    id
  } = props;
  const [timeGap, setTimeGap] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showTimeGap = useCallback((day)=>{
    
      if( day < 0) {
        faildTask(id)
        console.log(day)
        return setTimeGap('Expired');
      }
      console.log(day)
      return setTimeGap(`${day !== 0 ? day + ' day left': 'less than a day'}`);

  },[id, faildTask])

  useEffect(()=> {
    let startDate = new Date(sDate);
    let deadLine = new Date(dLine);
    startDate = startDate.setHours(0,0,0,0,0); 
    deadLine = deadLine.setHours(0,0,0,0,0);
    const UPDATE_TIME = 300000 ; // 5 min
    const TimeIntervalInDay = trackTimeInterval(deadLine, startDate);
    
    const statusCheck = () => {
        const TimeIntervalInDayloop = trackTimeInterval(deadLine, startDate); 
        return showTimeGap(TimeIntervalInDayloop)
   }

    if(`${tasks}` !== `${[]}`) {
      setInterval(statusCheck, UPDATE_TIME)
    } else clearInterval(statusCheck)
   
    
    // first render without Interval
    return showTimeGap(TimeIntervalInDay);
  },[sDate, dLine, id,tasks, showTimeGap])

  const handleRemoveClick = (e) => {
    removeTask(id)
  }
  const handleEditClick = (e) => {
     setIsModalOpen(true);
  }
  const handleCompleteClick = (e) => {
    console.log('completed')
    taskCompleted(id);
  }

  return (
    <li className="list-card">
        <h3 className="title">{title}</h3>
        <div className="description">
          <p>{label}</p>
        </div>
        <div className="counter">
            <i><span className="counter-time">{timeGap}</span></i>
          </div>
          
        <div className="list-card-footer">
          <div className="show-date">
            <p> <span className="start-date">{sDate}</span> - <span className="dead-date">{dLine}</span> </p> 
          </div>
          <div className="btns">
            <div className="edit-btn warning-btn"
                onClick={handleEditClick}>
                  <img src={edit_btn} alt="edit button"/>
                </div>
            <div className="remove-btn danger-btn"
                    onClick={handleRemoveClick}>
                      <img src={delete_btn} alt="remove button"/>
                    </div>
            <div className="done-btn success-btn"
                    onClick={handleCompleteClick}>
                    <img src={complete_btn} alt="complete button"/>  
                    </div> 
          </div>
        </div>   
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
