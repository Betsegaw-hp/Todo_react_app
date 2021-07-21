import React, { useState } from 'react';
import '../App.css';
import Account from './Components//Account/Account';
import Dashboard from './Components/Dasboard/Dashboard';
import Nav from './Components/Nav/Nav';
import Notification from './Components/Notification/Notification';
import PopUp from './Components/Notification/PopUp';
import Setting from './Components/Setting/Setting';
import Statics from './Components/statics/Statics';
import AddTaskContextProvider from './Contexts/addTaskContext';


function App() {

  const [navStatus, setNavStatus] = useState('Dashboard');
  const [isPoped, setIsPoped] = useState(false)
  
  let currentTab; 
  
   switch (navStatus) {
     case 'Dashboard':
       console.log(navStatus);
       currentTab = <Dashboard /> ;
       break;
     case 'Statics':
      console.log(navStatus);
       currentTab = <Statics /> ;
       break;
     case 'Notification':
      console.log(navStatus);
       currentTab = <Notification /> ;
       break;
     case 'Account':
      console.log(navStatus);
       currentTab = <Account /> ;
       break;
     case 'Setting':
      console.log(navStatus);
       currentTab = <Setting /> ;
       break;

     default:
      currentTab = <Dashboard /> ;
       break;
   }
 
 function changeTab(e) {
  let element = e.currentTarget.children;
  let navName = element[0].getAttribute('href');
  navName = navName.slice(1);
  setNavStatus(navName);
}
  return (
    <AddTaskContextProvider>
      {currentTab}
   <Nav changeTab={changeTab} />
   <PopUp data={'...'}
          isPoped={isPoped}
          onClose={() => setIsPoped(false)}/>
    </AddTaskContextProvider>
  );
}

export default App;
