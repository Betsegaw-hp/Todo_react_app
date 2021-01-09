import React from 'react';
import NoteBar from './NoteBar';

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