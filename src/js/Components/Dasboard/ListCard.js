import React, { useContext } from 'react';
import { TaskContext } from '../../Contexts/addTaskContext';


const ListCard = (props) => {
  const { removeTask, editTask, taskCompleted} = useContext(TaskContext);

  const {
    title,
    label,
    sDate,
    dLine,
    id
  } = props;

  const handleRemoveClick = (e) => {
    removeTask(id)
  }
  const handleEditClick = (e) => {
    editTask(id);
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
            <i><span className="counter-time">5 days</span> left</i>
          </div>
        <button className="edit-btn warning-btn"
                onClick={handleEditClick}>Edit</button>
        <button className="remove-btn danger-btn"
                onClick={handleRemoveClick}>Remove</button>
        <button className="done-btn success-btn"
                onClick={handleCompleteClick}>Completed</button>
    </li>
  )
}

export default ListCard;
