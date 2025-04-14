import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, onSelectUser, onDeleteUser }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Users</h2>
      {users.length === 0 ? (
        <p className="text-gray-500 text-center">No users available.</p>
      ) : (
        <div className="space-y-3">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onSelect={() => onSelectUser(user)}
              onDelete={() => onDeleteUser(user.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;