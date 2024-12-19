import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  valueColor?: string; // Optional prop to specify the color of the value
}

const StatCard: React.FC<StatCardProps> = ({ title, value, valueColor }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h2 className="text-gray-500 mb-2">{title}</h2>
      <p 
        className="text-2xl font-bold" 
        style={{ color: valueColor || 'inherit' }} // Apply color if provided
      >
        {value}
      </p>
    </div>
  );
};

export default StatCard;
