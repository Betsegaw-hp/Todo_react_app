import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLE = {
  position: 'fixed',
  bottom: '10%',
  right: '0',
  backgroundColor: 'red',
  padding: '10px',
  margin: '10px',
  zIndex: 1000
}


const PopUp = (props) => {
  const {
    isPoped,
    // data,
    onClose
  } = props;

  if(!isPoped) return null;

  return ReactDOM.createPortal(
    <>
    <div style={MODAL_STYLE}>
      <div className="completed-tasks-container" >
    <h3 className="completed-task-title">
      Alert Title</h3>
     
      <span className="emptyText"> 
      Body <span>Description, id, label, task title</span></span>
      <button onClick={onClose} style={{position: 'absolute', top: '0', right: '0'}}>X</button>
     </div>
    </div>
      
    </>, document.getElementById('portal_msg')
  )
}

export default PopUp;
