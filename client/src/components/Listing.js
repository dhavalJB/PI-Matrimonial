// Listing.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileModule from './ProfileModule';
import Profile from './Profile';

function Listing({ user }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        console.log('All users:', response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users');
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      {!selectedUser && (
        <>
          
          {users.length === 0 && <p>No users found</p>}
          {users.map(u => (
            <div key={u._id}>
              <ProfileModule user={u} onClick={() => handleUserClick(u)} />
            </div>
          ))}
          {error && <p>{error}</p>}
        </>
      )}
      {selectedUser && <Profile userDetails={selectedUser} />}

    </div>
  );
}

export default Listing;
