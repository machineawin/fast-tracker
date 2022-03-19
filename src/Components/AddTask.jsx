import { useState } from "react"

const AddTask = ( { onAdd } ) => {
    const [text, setTask] = useState ('')
    const [time, setTime] = useState ('')
    const [reminder, setReminder] = useState (false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert ('Please add text!')
            return
        }

        onAdd ({text, time, reminder})

        setTask ('')
        setTime ('')
        setReminder (false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type = 'text' 
                placeholder="Add Task" 
                value={text} 
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
                checked = {reminder}
                value={reminder} 
                onChange = {(e) => setReminder (e.currentTarget.checked)}
                ></input>
            </div>

            <input 
            type='submit' 
            value='Save Task' 
            className="btn btn-block"
            />


        </form>
    )
}

export default AddTask