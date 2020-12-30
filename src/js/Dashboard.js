import React from 'react';

function FormCard() {
  return(
    <div className="form-container">
      <form className="form-card">
            <h3>Add</h3>
            <input type="text" 
                  placeholder="Title for your plan"
                  className="title-input" /> <br></br>
            <input type="text" 
                    placeholder="Description"  
                    className="label-input" /><br></br>
            <label >Start-Date: </label>
            <input type="date" className="start-date" /><br></br>
            <label >Dead-line: </label>
            <input type="date"
                   className="dead-line"/><br></br>

            <input type="submit" 
                   className="add-form success-btn" />  
          </form>
    </div>
    
  )
}

function ListCard() {
  return(
    <div className="listCard-continer">
      <div className="list-card">
          <h3 className="title">Title</h3>
        <div className="description">
          <p>lorem  lorem lorem lorem</p>
        </div>
        <div className="show-time">
        <h4>Start Date: <span className="start-date">6/6/2021</span> </h4> 
        <h4>Dead line: <span className="dead-date">6/8/2021</span></h4> 
        </div>
        <div className="counter">
            <i><span className="counter-time">30 days</span> left</i>
          </div>
        <button className="edit-btn warning-btn">Edit</button>
        <button className="remove-btn danger-btn">Remove</button>
        <button className="done-btn success-btn">Done</button>
      </div>
    </div>
    
  ) 
}

function Dashboard() {
  return(
    <section id="Dashboard" className="Dashboard">
    <nav>
      <span>DashBoard</span>
    </nav>
    <FormCard />
    <ListCard />
    </section>
  )
}

export default Dashboard;