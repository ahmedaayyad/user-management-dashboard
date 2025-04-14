import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserProfile from './components/UserProfile';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const initialUsers = [
      {
        id: uuidv4(),
        name: 'Alice Smith',
        email: 'alice@example.com',
        role: 'Admin',
        bio: 'Admin user with full access.',
      },
      {
        id: uuidv4(),
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'User',
        bio: 'Regular user with limited access.',
      },
    ];
    setUsers(initialUsers);
  }, []);

  const handleSaveUser = (user) => {
    if (user.id) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      const newUser = { ...user, id: uuidv4() };
      setUsers([...users, newUser]);
    }
    setSelectedUser(null);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    if (selectedUser?.id === id) setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-500 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold text-center tracking-tight">
          User Management Dashboard
        </h1>
      </header>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <UserList
            users={users}
            onSelectUser={setSelectedUser}
            onDeleteUser={handleDeleteUser}
          />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <UserForm onSave={handleSaveUser} selectedUser={selectedUser} />
          {selectedUser && <UserProfile user={selectedUser} />}
        </div>
      </main>
    </div>
  );
}

export default App;