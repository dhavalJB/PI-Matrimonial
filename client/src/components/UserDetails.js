import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/UserDetails.css'; // Import the CSS file

function UserDetails({ user }) {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${user.username}`);
        console.log('User details:', response.data);
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError('User details not found');
      }
    };

    if (user) {
      fetchUserDetails();
    }
  }, [user]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      {userDetails.image && (
        <div className="user-image-container">
          <img src={`http://localhost:5000/api/users/image/${userDetails.image}`} alt="User" />
        </div>
      )}
      {userDetails.name && <p>Name: {userDetails.name}</p>}
      {userDetails.email && <p>Email: {userDetails.email}</p>}
      {userDetails.age && <p>Age: {userDetails.age}</p>}
      {userDetails.gender && <p>Gender: {userDetails.gender}</p>}
      {userDetails.height && <p>Height: {userDetails.height}</p>}
      {userDetails.weight && <p>Weight: {userDetails.weight}</p>}
      {userDetails.motherTongue && <p>Mother Tongue: {userDetails.motherTongue}</p>}
      {userDetails.maritalStatus && <p>Marital Status: {userDetails.maritalStatus}</p>}
      {userDetails.religion && <p>Religion: {userDetails.religion}</p>}
      {userDetails.caste && <p>Caste: {userDetails.caste}</p>}
      {userDetails.bodyType && <p>Body Type: {userDetails.bodyType}</p>}
      {userDetails.physicalStatus && <p>Physical Status: {userDetails.physicalStatus}</p>}
      {userDetails.eatingHabits && <p>Eating Habits: {userDetails.eatingHabits}</p>}
      {userDetails.drinkingHabits && <p>Drinking Habits: {userDetails.drinkingHabits}</p>}
      {userDetails.smokingHabits && <p>Smoking Habits: {userDetails.smokingHabits}</p>}
      {userDetails.education && <p>Education: {userDetails.education}</p>}
      {userDetails.educationDetail && <p>Education Detail: {userDetails.educationDetail}</p>}
      {userDetails.employedIn && <p>Employed In: {userDetails.employedIn}</p>}
      {userDetails.occupation && <p>Occupation: {userDetails.occupation}</p>}
      {userDetails.occupationDetail && <p>Occupation Detail: {userDetails.occupationDetail}</p>}
      {userDetails.annualIncome && <p>Annual Income: {userDetails.annualIncome}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default UserDetails;
