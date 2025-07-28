import React from 'react';

import TodoTask from './TodoTask'

const TodoTasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            <p>Dobble click a task to activate reminder</p>
            {tasks.map((task) => (
            <TodoTask
                key={task.id} 
                task={task}
                onDelete={onDelete} 
                onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default TodoTasks