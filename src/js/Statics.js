import React from 'react';

function Chart() {
  return(
    <div className="chart-container">
      <h1>I am the chart</h1>
    </div>
  )
}

function Statics() {
  return (
    <section id="Statics" className="Statics">
      <nav>
      <span>Statics</span>
    </nav>
    <div className="select-date">
      <select  id="date-select">
        <option value="30 days">30 days</option>
        <option value="7 days">7 days</option>
      </select>
    </div>
      
      <Chart />
    </section>
  );
}

export default Statics;