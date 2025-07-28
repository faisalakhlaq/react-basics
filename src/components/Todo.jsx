import React from 'react';
import { useState } from 'react'

import TodoHeader from './TodoHeader'
import TodoTasks from './TodoTasks'
import AddTask from './AddTask'
import data from "../../src/tasks.json"

const Todo = () => {

    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState(data)

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
        <TodoHeader onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        { tasks.length > 0 ? (
          <TodoTasks
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggelReminder}
          />
        ) : (
          'No Tasks To Show'
        )
        }
      </div>
    );
  }

export default Todo 