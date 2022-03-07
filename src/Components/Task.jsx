
const Task = ({task}) => {

  return (
    <div className="task">
        <h1>{task.text}</h1>
        <h3>{task.time}</h3>        
    </div>
  )
}

export default Task