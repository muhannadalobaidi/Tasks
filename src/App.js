import Header from './component/Header'
import {useState} from 'react'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'


function App() {
  const [showAddTask, setshowAddTask] = useState(true)
  const [tasks  , setTasks] = useState([
    
])

// Add tesk to the tasks state
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// delet task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle remainder 
const toggleRemainder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, remainder: !task.remainder} : task))
}
  
  return (
    <div className="container">
      
      <Header  onAdd = {() => setshowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask  onAdd= {addTask} />}
      {tasks.length > 0 ? <Tasks tasks= {tasks} 
      onDelete= {deleteTask} 
      onToggle= {toggleRemainder} /> : 'no tasks avilable'}
      
    </div>
  );
}

export default App;
