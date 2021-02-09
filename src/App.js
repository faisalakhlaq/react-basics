import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Modal from './components/TaskModal.js'
import data from './tasks.json'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(data)
  const [showTaskInModal, setShowModal] = useState(false)
  const [modalTask, setModalTask] = useState('')

  const showModal = (task) => {
    setModalTask(task);
    setShowModal(true);
    console.log(modalTask);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task} 
    setTasks([...tasks, newTask])
    setShowAddTask(!showAddTask)
  }

  // method to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggelReminder = (id) => {
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
        onToggle={toggelReminder}
        onClick={showModal}
        />
      ) : (
        'No Tasks To Show'
      )
      }
      {showTaskInModal && <Modal 
      show={showTaskInModal} 
      handleClose={hideModal}
      task={modalTask}> 
            <p>Task: {modalTask.text}</p>
            <p>Date: {modalTask.day}</p>
            <p>Remind: {modalTask.reminder}</p>
        </Modal>}
    </div>
  );
}

export default App;