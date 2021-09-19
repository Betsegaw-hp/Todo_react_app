import React, { useRef, useState, useEffect} from 'react';

function Setting() {
  const isTheme = localStorage.getItem("darkMode")
  const defaultTheme = localStorage.setItem("darkMode", false)
  const [switchState, setSwitchState] = useState(isTheme ? JSON.parse(isTheme): defaultTheme )

  const switcher = useRef(null);
  
  useEffect(() => {
    if(switcher && JSON.stringify(switchState) !== "false") {
      switcher.current.classList.add("switch-slide")
      localStorage.setItem("darkMode", true)
    } else {
       switcher.current.classList.remove("switch-slide")
       localStorage.setItem("darkMode", false)
    }
  }, [switchState])

  function handleClick(e) {
    if(switcher.current.classList.contains("switch-slide")) {
      setSwitchState(false)
    } else { 
      setSwitchState(true)
    } 
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
