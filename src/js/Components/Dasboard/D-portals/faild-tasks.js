import React from 'react';
import error_btn from '../../../../media/assignment_late-black-24dp.svg';

const FaildTasks = () => {
  return (
    <>
      <div className="faild-tasks">
          <img src={error_btn} alt="faild tasks" />
        </div>
    </>
  )
}

export default FaildTasks;