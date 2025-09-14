import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, activeTab, onToggleTask, onDeleteTask, onDeleteAllCompleted }) => {
  const canDelete = activeTab === 'Completed';

  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <div className="empty-state">
          {activeTab === 'All' && 'No tasks yet. Add one above!'}
          {activeTab === 'Active' && 'No active tasks.'}
          {activeTab === 'Completed' && 'No completed tasks.'}
        </div>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          canDelete={canDelete}
        />
      ))}
      
      {/* Delete All Completed Button - Only show in Completed tab */}
      {canDelete && tasks.length > 0 && (
        <div className="delete-all-container">
          <button 
            onClick={onDeleteAllCompleted}
            className="delete-all-button"
          >
            🗑️ delete all
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
