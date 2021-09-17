import React from 'react';
import remove_btn from '../../../media/cancel.svg'

const NoteBar = () => {
  return (
    <div className="Bar">
      <div className="content-text content">
        <span>Task Title added</span><br></br>
        <span >label</span><br></br>
        <span>1/2/2000</span>{'  ->  '}<span>1/4/2000</span>
      </div>
      <div className="content">
        <button className="danger-btn">
          <img  width="10" 
                height="10" 
                src={remove_btn}  
                alt="remove button"/>
        </button>
      </div>
    </div>
  )
}

export default NoteBar;