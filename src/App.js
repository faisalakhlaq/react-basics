import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import data from './tasks.json'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(data)

  // const getData=()=>{
  //   fetch('tasks.json',
  //     {
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //     }
  //     )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       setTasks(myJson)
  //     });
  // }

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task} 
    setTasks([...tasks, newTask])
  }

  // method to delete a task
  const deleteTask = (id) => {
    console.log('Delete ', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggelReminder = (id) => {
    console.log(id)
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task
      ))
  }

  // getData()
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ? (     
        <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggelReminder}/>
      ) : (
        'No Tasks To Show'
      )
      }
    </div>
  );
}

export default App;