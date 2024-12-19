import React from 'react';

const ActivityOverview: React.FC = () => {
  return (
    <div className="mt-6 bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold">Activity Overview</h2>
      <p className="text-gray-500 text-sm mb-4">Last updated 3 hours ago</p>
      <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
        Activity Graph 
      </div>
    </div>
  );
};

export default ActivityOverview;
