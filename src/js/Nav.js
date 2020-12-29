import React from 'react';
import '../App.css';
import analyticsIcon from '../media/analytics.svg';
import dashboardIcon from '../media/dashborad.svg';
import notificationIcon from '../media/notification-bell.svg';
import userIcon from '../media/user.svg';

function Nav() {
  return(
      <nav className="navbar"> 
          <ul className="nav-list">
            <li className="nav-list-item">
              <a href="#">
              <img src={dashboardIcon} alt=""/>
                <span className="list-name">Dashboard</span>
              </a>
            </li>
            <li className="nav-list-item">
            <a href="#">
              <img src={analyticsIcon} alt=""/>
                <span className="list-name">Statics</span>
              </a>
            </li>
            <li className="nav-list-item">
            <a href="#">
              <img src={notificationIcon} alt=""/>
                <span className="list-name">Notification</span>
              </a>
            </li>
            <li className="nav-list-item">
            <a href="#">
              <img src={userIcon} alt=""/>
                <span className="list-name">Account</span>
              </a>
            </li>
          </ul>
      </nav>
  )
}

export default Nav;