import React from 'react';
import ReactDOM from 'react-dom';
import remove_btn from '../../../media/cancel.svg'

const MODAL_STYLE = {
  position: 'fixed',
  bottom: '3%',
  right: '0',
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
        <div className="msg-holder-card" >
          <h3 align='left'>
            Alert Title</h3>
     
          <span className="emptyText"> 
          Body <br></br><span>Description, id, label, task title</span></span>
          <button onClick={onClose} style={{position: 'absolute', top: '0', right: '0', padding: '.5rem', background: 'none'}}>
            <img width="10" height="10" src={remove_btn} alt="remove button"/>
            </button>
     </div>
    </div>
      
    </>, document.getElementById('portal_msg')
  )
}

export default PopUp;
