import React, { useRef } from 'react';
import dashboardIcon from '../../../media/dashboard_black_24dp.svg';
import show_more_btn from '../../../media/more_horiz-black-24dp.svg';
import notificationIcon from '../../../media/notifications_black_24dp.svg';
import userIcon from '../../../media/person_black_24dp.svg';
import cogsIcon from '../../../media/settings_black_24dp.svg';
import logoIcon from '../../../media/todo-app-logo.svg';
import analyticsIcon from '../../../media/trending_up_black_24dp.svg';

function Nav(props) {
  const {
    changeTab,
  } = props;


  const navbar = useRef(null)

  const handleClick = (e) => {
    e.currentTarget.classList.toggle('show-more-btn-rotate')
    navbar.current.classList.toggle('navbar-show')
  }

  
  
  return(
    <>
        <nav className="navbar" ref={navbar}> 
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#home">
              <img src={logoIcon} alt="dashboard-icon"/>
              <span className="logo-text">
               todo
              </span>
              </a>
            </li>
            <li className="nav-list-item"
                onClick={changeTab}>
              <a href="#Dashboard">
              <img src={dashboardIcon} alt="dashboard-icon"/>
                <span className="list-name">Dashboard</span>
              </a>
            </li>
            <li className="nav-list-item"
                onClick={changeTab}>
            <a href="#Statics">
              <img src={analyticsIcon} alt="statics-icon"/>
                <span className="list-name">Statics</span>
              </a>
            </li>
            <li className="nav-list-item"
                onClick={changeTab}>
            <a href="#Notification">
              <img src={notificationIcon} alt="Notification-icon"/>
                <span className="list-name">Notification</span>
              </a>
            </li>
            <li className="nav-list-item"
                onClick={changeTab}>
            <a href="#Setting">
              <img src={cogsIcon} alt="setting-icon"/>
                <span className="list-name">Setting</span>
              </a>
            </li>
            <li className="nav-list-item"
                onClick={changeTab}>
            <a href="#Account">
              <img src={userIcon} alt="user Account-icon"/>
                <span className="list-name">account</span>
              </a>
            </li>
          </ul> 

      </nav>
          <div className="show-more-btn"
              onClick={(e) => handleClick(e)}>
            <img src={show_more_btn} alt="show more"/>
          </div>
    </>

  )
}

export default Nav;