import React, { useRef, useState} from 'react';

function Setting() {
  const [switchState, setSwitchState] = useState(false)

  const switcher = useRef(null);
  
  function handleClick(e) {
    switcher.current.classList.toggle("switch-slide")
    if(switcher.current.classList.contains("switch-slide")) {
      setSwitchState(true)
    } else setSwitchState(false)
  }
 
  return (
    <section id="Setting" className="Setting">
      <nav>
      <span>Setting</span>
    </nav>
    <div className="setting-content">
    <div className="theme">
      <h1>Theme</h1>
      <p>Dark mode</p>
      <button className="switch-btn" onClick={handleClick}>
        <span className="switch" ref={switcher} ></span>
      </button>
      {
        switchState ? <span>on</span> : <span>off</span>
      }
    </div>
    </div>
    </section>
  )
}

export default Setting;
