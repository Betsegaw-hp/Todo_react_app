import React from 'react';
import analyticsIcon from '../../../media/analytics.svg';
import dashboardIcon from '../../../media/dashborad.svg';
import notificationIcon from '../../../media/notification-bell.svg';
import cogsIcon from '../../../media/setting.svg';
import logoIcon from '../../../media/todo-app-logo.svg';
import userIcon from '../../../media/user.svg';

function Nav(props) {
  const {
    changeTab,
  } = props;
  return(
      <nav className="navbar"> 
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
  )
}

export default Nav;