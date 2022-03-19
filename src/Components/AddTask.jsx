import { useState } from "react"

const AddTask = () => {
    const [task, setTask] = useState ('')
    const [time, setTime] = useState ('')
    const [reminder, setReminder] = useState (false)

    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type = 'text' 
                placeholder="Add Task" 
                value={task} 
                onChange = {(e) => setTask (e.target.value)}
                ></input>
            </div>
            <div className="form-control">
                <label>Time</label>
                <input 
                type = 'text' 
                placeholder="Add Day and Time"
                value={time} 
                onChange = {(e) => setTime (e.target.value)}
                ></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                type = 'checkbox'
                value={reminder} 
                onChange = {(e) => setReminder (e.currentTarget.checked)}
                ></input>
            </div>

            <input type='submit' value='Save Task' className="btn btn-block"/>


        </form>
    )
}

export default AddTask