import React, { useState } from 'react';
import './AddTaskForm.css';

const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="add details"
        className="task-input"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;
