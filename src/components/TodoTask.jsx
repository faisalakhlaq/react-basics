import React from 'react';

const nonSelectableStyle = {
    userSelect: "none"
}

const TodoTask = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}
            style={nonSelectableStyle}>
            <h3>{ task.text } 
            <button style={{color: 'red', cursor:'pointer'}}
            onClick={() => onDelete(task.id)}>Delete</button>
            </h3>
            <p>{ task.day }</p>
        </div>
    )
}

export default TodoTask