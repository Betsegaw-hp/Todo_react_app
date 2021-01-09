import React, { useContext, useState } from 'react';
import { TaskContext } from '../../Contexts/addTaskContext';

const FormCard = () => {
  const [title, setTitle] = useState('');
  const [label, setLabel] = useState('');
  const [sDate, setSdate] = useState('');
  const [dLine, setDline] = useState('');

  const {addTask} = useContext(TaskContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    addTask(title,label,dLine,sDate);
    clearState();
  }
  const clearState = () => {
    setTitle('');setLabel('');
    setSdate('');setDline('')
  }
  return (
    <div className="form-container">
      <form className="form-card" onSubmit={e => HandleSubmit(e)}>
            <h3>Add</h3>
            <input type="text" 
                  placeholder=""
                  className="title-input"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                   required/>
                  <span>Title for your plan</span><br></br>
            <input type="text" 
                    placeholder=""  
                    className="label-input"
                    value={label}
                    onChange={e =>setLabel(e.target.value) }
                     required/>
                    <span>Description</span><br></br>
            <label htmlFor="start-date">Start-Date: </label>
            <input type="date" 
                   id="start-date" 
                   className="start-date"
                   value={sDate}
                   onChange={e => setSdate(e.target.value)} /><br></br>
            <label htmlFor="dead-line">Dead-line: </label>
            <input type="date"
                   id="dead-line"
                   className="dead-line"
                   value={dLine}
                   onChange={e =>setDline(e.target.value) } 
                   required/><br></br>

            <input type="submit" 
                   className="add-form success-btn" />  
          </form>
    </div>
  )
}

export default FormCard



