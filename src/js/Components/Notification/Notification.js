import React from 'react';

function NoteBar() {
  return(
    <div className="Bar">
      <div className="content-text content">
        <span >Lorem Lorem Lorem Lorem Lorem Lorem</span><br></br>
        <span >Lorem Lorem Lorem Lorem Lorem Lorem</span>
      </div>
      <div className="content">
        <button className="danger-btn">remove</button>
      </div>
    </div>
  )
}
function Notification() {
  return(
    <section id="Notification" className="Notification">
      <nav>
        <span>Notification</span>
      </nav>
      <NoteBar />
      <NoteBar />
      <NoteBar />
    </section>
  )
}

export default Notification;