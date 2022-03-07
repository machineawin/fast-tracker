import Task from "./Task"

const Tasks = () => {

    const tasks = [
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

  return (
      
    tasks.map ((task) => {
        return(
            <Task key = {task.id} task = {task}/>
        )
        
    })
  )
}

export default Tasks