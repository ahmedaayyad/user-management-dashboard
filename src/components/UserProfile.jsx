import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">User Profile</h2>
      <div className="space-y-3">
        <p className="text-gray-700">
          <span className="font-medium text-gray-800">Name:</span> {user.name}
        </p>
        <p className="text-gray-700">
          <span className="font-medium text-gray-800">Email:</span> {user.email}
        </p>
        <p className="text-gray-700">
          <span className="font-medium text-gray-800">Role:</span> {user.role}
        </p>
        <p className="text-gray-700">
          <span className="font-medium text-gray-800">Bio:</span>{' '}
          {user.bio || 'No bio available.'}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;