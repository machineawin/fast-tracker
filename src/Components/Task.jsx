import { FaTimes } from "react-icons/fa";
const Task = ({task, onDelete, onToggle}) => {

  return (
    <div 
    className="task"
    onDoubleClick = {() => onToggle(task.id)}
    >
        <h3>{task.text} 
          <FaTimes 
          color="red" 
          cursor='default'
          onClick={() => onDelete(task.id)}          
          />          
        </h3>
        <p>{task.time}</p>        
    </div>
  )
}

export default Task