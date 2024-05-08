// ProfileModule.js

import React from 'react';
import './css/ProfileModule.css'; // Import the CSS file

function ProfileModule({ user, onClick, onConnect }) {
  const handleConnect = (userId) => {
    // Call the onConnect function passed from the parent component
    onConnect(userId);
  };

  return (
    <div className="card">
      <div className="profile-photo">
        {user.image && (
          <img src={`http://localhost:5000/api/users/image/${user.image}`} alt={user.name} />
        )}
      </div>
      <h3 className="profile-name">{user.name}</h3>
      <p className="about">
        {user.age} <br /> {user.gender}
      </p>
      <button className="btns" onClick={onClick}>
        View Profile
      </button>
      <button className="btns" onClick={() => handleConnect(user._id)}>
        Connect
      </button>
    </div>
  );
}

export default ProfileModule;
