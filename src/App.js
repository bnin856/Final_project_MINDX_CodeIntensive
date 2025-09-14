import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState('All');

  // Filter tasks based on active tab
  const getFilteredTasks = () => {
    switch (activeTab) {
      case 'Active':
        return tasks.filter(task => task.active);
      case 'Completed':
        return tasks.filter(task => !task.active);
      default:
        return tasks;
    }
  };

  // Add new task
  const addTask = (taskText) => {
    const task = {
      id: Date.now(),
      text: taskText,
      active: true
    };
    setTasks([...tasks, task]);
  };

  // Toggle task status
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, active: !task.active } : task
    ));
  };

  // Delete individual task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Delete all completed tasks
  const deleteAllCompleted = () => {
    setTasks(tasks.filter(task => task.active));
  };

  const filteredTasks = getFilteredTasks();
  const canAddTask = activeTab === 'All' || activeTab === 'Active';

  return (
    <div className="todo-app">
      <div className="todo-container">
        <Header />
        
        <Tabs 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        {/* Add Task Form - Only show in All and Active tabs */}
        {canAddTask && (
          <AddTaskForm onAddTask={addTask} />
        )}

        <TaskList 
          tasks={filteredTasks}
          activeTab={activeTab}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onDeleteAllCompleted={deleteAllCompleted}
        />
      </div>
    </div>
  );
}

export default App;
