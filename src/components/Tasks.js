import Task from './Task'
import TaskImage from './TaskImage'

const Tasks = ({ tasks, onDelete, onToggle, onClick }) => {
    return (
        <>
            <p>Dobble click a task to activate reminder</p>
            {tasks.map((task) => (
            <Task 
                key={task.id} 
                task={task}
                onDelete={onDelete} 
                onToggle={onToggle}
                />
            ))}
            <h3>Click the below task to show details</h3>
            {tasks.map((task) => (
            <TaskImage 
                key={task.id} 
                task={task}
                onClick={onClick}
                />
            ))}            
        </>
    )
}

export default Tasks