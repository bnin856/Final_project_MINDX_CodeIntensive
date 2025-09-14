import React from 'react';
import './Tabs.css';

const Tabs = ({ activeTab, onTabChange }) => {
  const tabs = ['All', 'Active', 'Completed'];

  return (
    <div className="tab-navigation">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
