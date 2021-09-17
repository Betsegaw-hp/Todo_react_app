import add_task_illustration from '../../../media/First_Add_tasks.svg'

const MsgHolder = (props) => {
    const {
      handleClick
    } = props
    return (
    <div className="msg-holder">
      <div className="msg-holder-card">
          <div className="msg-illustration">
            <img src={add_task_illustration} alt="add task illustration" width="200" height="200"/>
          </div>
          <div className="msg-text">
            <h3>Focus on your goal</h3>
            <p>Get things done as you planned, boost your productivity.</p>
            <button className="success-btn add-custom-btn" onClick={handleClick}>* Get Started *</button>
          </div>
      </div>
    </div>
    )
}

export default MsgHolder
