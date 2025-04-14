import React from 'react';
import { FaTrash } from 'react-icons/fa';

const UserCard = ({ user, onSelect, onDelete }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center cursor-pointer border border-gray-100 hover:shadow-md hover:border-gray-300 transition-all duration-200"
      onClick={onSelect}
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onSelect()}
    >
      <div>
        <h3 className="text-lg font-medium text-gray-800">{user.name}</h3>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-500">{user.role}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full p-2 transition-colors duration-200"
        aria-label={`Delete ${user.name}`}
      >
        <FaTrash className="w-5 h-5" />
      </button>
    </div>
  );
};

export default UserCard;