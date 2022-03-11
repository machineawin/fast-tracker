
import Tasks from './Components/Tasks';
import Header from './Components/Header';
import Button from './Components/Button';

function App() {
  return (
    <div className="container">
      <Header title = 'Task Tracker'/>
      <Button 
      btnName='Add' 
      btnColour = 'green'
      />
      <Tasks/>

    </div>
  );
  
}

export default App;
