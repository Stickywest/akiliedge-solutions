import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
        Upgrade Your Plan
      </button>
    </div>
  );
};

export default Header;
