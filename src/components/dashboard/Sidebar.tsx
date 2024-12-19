import React from 'react';
import { FaUser, FaTasks, FaCalendarAlt } from 'react-icons/fa';

interface SidebarProps {
  setActiveComponent: (component: string) => void; // Define the type of the prop
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveComponent }) => {
  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden md:block w-1/4 bg-white shadow-lg p-6 rounded-lg h-screen sticky top-0">
        <ul className="space-y-6">
          <li
            onClick={() => setActiveComponent('dashboard')}
            className="flex items-center space-x-3 cursor-pointer hover:bg-blue-50 p-3 rounded-lg transition"
            aria-label="Dashboard"
          >
            <FaUser className="text-blue-500" />
            <span className="font-medium">Dashboard</span>
          </li>
          <li
            onClick={() => setActiveComponent('tasks')}
            className="flex items-center space-x-3 cursor-pointer hover:bg-blue-50 p-3 rounded-lg transition"
            aria-label="Tasks"
          >
            <FaTasks className="text-red-500" />
            <span className="font-medium">Tasks</span>
          </li>
          <li
            onClick={() => setActiveComponent('appointments')}
            className="flex items-center space-x-3 cursor-pointer hover:bg-blue-50 p-3 rounded-lg transition"
            aria-label="Appointments"
          >
            <FaCalendarAlt className="text-green-500" />
            <span className="font-medium">Appointments</span>
          </li>
        </ul>
      </div>

      {/* Bottom navigation bar for smaller screens */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-t md:hidden flex justify-around py-3 border-t border-gray-200">
        <button
          onClick={() => setActiveComponent('dashboard')}
          className="flex flex-col items-center transition hover:text-blue-600"
          aria-label="Dashboard"
        >
          <FaUser className="text-blue-500 text-2xl" />
        </button>
        <button
          onClick={() => setActiveComponent('tasks')}
          className="flex flex-col items-center transition hover:text-red-600"
          aria-label="Tasks"
        >
          <FaTasks className="text-red-500 text-2xl" />
        </button>
        <button
          onClick={() => setActiveComponent('appointments')}
          className="flex flex-col items-center transition hover:text-green-600"
          aria-label="Appointments"
        >
          <FaCalendarAlt className="text-green-500 text-2xl" />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
