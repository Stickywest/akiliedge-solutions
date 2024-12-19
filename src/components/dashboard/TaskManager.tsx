import React from 'react';

const TaskManager: React.FC = () => {
  const tasks = [
    { task: 'Finish dashboard design', status: 'Completed', color: 'green' },
    { task: 'Prepare project report', status: 'In Progress', color: 'yellow' },
    { task: 'Team meeting at 3 PM', status: 'Pending', color: 'red' },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Task Manager</h2>
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between">
            <span>{task.task}</span>
            <span className={`text-${task.color}-500`}>{task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
