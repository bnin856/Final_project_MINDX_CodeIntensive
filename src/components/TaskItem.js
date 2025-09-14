import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onToggleTask, onDeleteTask, canDelete }) => {
  return (
    <div className={`task-item ${!task.active ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={!task.active}
          onChange={() => onToggleTask(task.id)}
          className="task-checkbox"
        />
        <span className="task-text">{task.text}</span>
      </div>
      {canDelete && (
        <button 
          onClick={() => onDeleteTask(task.id)}
          className="delete-button"
          title="Delete task"
        >
          🗑️
        </button>
      )}
    </div>
  );
};

export default TaskItem;
