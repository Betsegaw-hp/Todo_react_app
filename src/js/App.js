import React, { useState } from 'react';
import '../App.css';
import Account from './Account.js';
import Dashboard from './Dashboard.js';
import Nav from './Nav.js';
import Notification from './Notification.js';
import Statics from './Statics.js';



function App() {

  const [navStatus, setNavStatus] = useState('Dashboard');
  
  let currentTab; 
  
   switch (navStatus) {
     case 'Dashboard':
       console.log('dashboard');
       currentTab = <Dashboard /> ;
       break;
     case 'Statics':
       console.log('Statics');
       currentTab = <Statics /> ;
       break;
     case 'Notification':
       console.log('Notification');
       currentTab = <Notification /> ;
       break;
     case 'Account':
       console.log('Account');
       currentTab = <Account /> ;
       break;

     default:
      currentTab = <Dashboard /> ;
       break;
   }
 
 function callme(e) {
  let element = e.currentTarget.children;
  let navName = element[0].getAttribute('href');
  navName = navName.slice(1);
  setNavStatus(navName);
}
  return (
    <>
      {currentTab}
   <Nav callme={callme} />
    </>
   
  );
}

export default App;
