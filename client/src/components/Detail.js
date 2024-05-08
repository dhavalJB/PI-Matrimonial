// client/src/components/Detail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetails from './UserDetails';
import UserForm from './UserForm';
import '../components/css/Detail.css';

const Detail = ({ user }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [userFormVisible, setUserFormVisible] = useState(false);
  const [error, setError] = useState('');
  const [detailsFetched, setDetailsFetched] = useState(false);

  const fetchUserDetails = async (username) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${username}`);
      console.log('User details:', response.data);
      setUserDetails(response.data); // Set user details here
      setDetailsFetched(true);
    } catch (error) {
      console.error('Error fetching user details:', error);
      setError('User not found');
    }
  };

  useEffect(() => {
    if (user && user.username && !detailsFetched) {
      fetchUserDetails(user.username);
    }
  }, [user, detailsFetched]);

  const handleUserDetailsClick = () => {
    setUserFormVisible(false);
  };

  const handleUserFormClick = () => {
    setUserFormVisible(true);
  };

  return (
    <div className="detail-container">
      <h1>User Details</h1>
      {!userFormVisible && detailsFetched && <UserDetails user={userDetails} />}
      {userFormVisible && user && <UserForm user={user} />} {/* Pass user object here */}
      <button className="details-btn" onClick={handleUserDetailsClick}>User Detail</button>
      <button className="form-btn" onClick={handleUserFormClick}>User Form</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Detail;
