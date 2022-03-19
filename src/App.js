
import Tasks from './Components/Tasks';
import Header from './Components/Header';
import Button from './Components/Button';
import { useState } from "react"
import AddTask from './Components/AddTask';
import PracticeForm from './Components/PracticeForm';

function App() {

  const [tasks, setTasks] = useState (
    [
        {
            id: 1,
            text: 'Dentist appointment',
            time: '3 March 3:30 PM',
            reminder: true,
        },
        {
            id: 2,
            text: 'Gym',
            time: '4 March 4:30 PM',
            reminder: false,
        },
        {
            id: 3,
            text: 'School pickup',
            time: '5 March 5:30 PM',
            reminder: false,
        },
    ]
)

//Add Task
const addTask = (task) => {
  console.log (task);
}


//Toggle Reminder
const toggleReminder = (id) => {
  setTasks (tasks.map ((task) => task.id === id ? { ...task, reminder: !task.reminder } : task) )
}


//Delete Task
const deleteTask  = (id) => {
  setTasks (tasks.filter((task) => task.id !== id) )
}

  return (
    <div className="container">
      <Header title = 'Task Tracker'/>  
      <AddTask onAdd = {addTask}/>    
      {tasks.length >0 ? (<Tasks 
        tasks = {tasks}
        onDelete = {deleteTask}
        onToggle = {toggleReminder}        
      />) : 'You have completed all your tasks!'
    }

    </div>
  );
  
}

export default App;
