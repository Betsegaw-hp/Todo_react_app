import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { TaskContext } from '../../../Contexts/addTaskContext';
import { taskEdited } from '../../../Reducers/actions';

 const MODAL_STYLE = {
   position: 'fixed',
   top: '50%',
   left: '50%',
   transform:  'translate(-50%, -50%)',
   padding: '50px',
   zIndex: 1000
 }
 const OVERLAY_SHADOW = {
   position: 'fixed',
   top: 0, left: 0,right:0,bottom:0,
   backgroundColor: 'rgba(0,0,0,0.6)',
   zIndex: 1000
 }

 const Modal = (props) => {
   const { modalOpen,
           onClose, 
           title,
           label,
           id,
           sDate, dLine
         } = props;
   const {  dispatch } =  useContext(TaskContext);

   const [editedTitle, setEditedTitle] = useState(title);
   const [editedLabel, setEditedLabel] = useState(label);
   const [editedSdate, setEditedSdate] = useState(sDate);
   const [editedDline, setEditedDline] = useState(dLine);  
    
  const HandleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(taskEdited(id,editedTitle,editedLabel,editedDline,editedSdate))
    onClose();
   } 
   
   if(!modalOpen) return null;

  return ReactDOM.createPortal(
    <>
    <div style={OVERLAY_SHADOW} onClick={onClose}></div>
    <div style={MODAL_STYLE}>
      {/* <button onClick={onClose}>close</button> */}
      <form className="form-card" onSubmit={e => HandleEditSubmit(e)}>
            <h3>Edit</h3>
            
            <input type="text" 
                  placeholder=""
                  className="title-input"
                  value={editedTitle}
                  onChange={e => setEditedTitle(e.target.value)}/>
                  <span>Edit a task</span><br></br>

            <input type="text" 
                    placeholder=""  
                    className="label-input"
                    value={editedLabel}
                    onChange={e =>setEditedLabel(e.target.value) }/>
                    <span>label</span><br></br>

            <label htmlFor="start-date">Start-Date: </label>
            <input type="date" 
                   id="start-date" 
                   className="start-date"
                   value={editedSdate}
                   onChange={e => setEditedSdate(e.target.value)} /><br></br>

            <label htmlFor="dead-line">Dead-line: </label>
            <input type="date"
                   id="dead-line"
                   className="dead-line"
                   value={editedDline}
                   onChange={e =>setEditedDline(e.target.value) } /><br></br>

            <input type="submit" 
                   className="add-form success-btn"
                   value='Done' />  
          </form>
      
    </div>
    </>,
    document.getElementById('portal')
  )

}

export default Modal;