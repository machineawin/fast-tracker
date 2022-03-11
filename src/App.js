
import Tasks from './Components/Tasks';
import Header from './Components/Header';
import Button from './Components/Button';
import { useState } from "react"

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

  return (
    <div className="container">
      <Header title = 'Task Tracker'/>      
      <Tasks tasks = {tasks}/>

    </div>
  );
  
}

export default App;
