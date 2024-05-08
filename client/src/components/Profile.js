import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Profile.css';

function FullProfile({ userDetails: user }) {
  const [profileDetails, setProfileDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${user.username}`);
        console.log('User details:', response.data);
        setProfileDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError('User details not found');
      }
    };

    if (user) {
      fetchProfileDetails();
    }
  }, [user]);

  if (!profileDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={`http://localhost:5000/api/users/image/${profileDetails.image}`} alt=""/>
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file"/>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{profileDetails.name}</h5>
                <h6>{profileDetails.bio}</h6>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="personal-tab" data-toggle="tab" href="#personal" role="tab" aria-controls="personal" aria-selected="true">Personal</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="professional-tab" data-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">Professional</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="personal" role="tabpanel" aria-labelledby="personal-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Age</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.age} years old</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Gender</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.gender}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Height</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.height}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Weight</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.weight}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Mother Tongue</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.motherTongue}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Marital Status</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.maritalStatus}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Religion</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.religion}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Caste</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.caste}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Body Type</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.bodyType}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Physical Status</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.physicalStatus}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Eating Habits</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.eatingHabits}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Drinking Habits</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.drinkingHabits}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Smoking Habits</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.smokingHabits}</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="professional" role="tabpanel" aria-labelledby="professional-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Education</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.education}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Education Detail</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.educationDetail}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Employed In</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.employedIn}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Occupation</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.occupation}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Occupation Detail</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.occupationDetail}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Annual Income</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profileDetails.annualIncome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {error && <p className="card-text text-danger">{error}</p>}
              <div className="content__button">
                <button className="buttonConnecting">Connect</button>
              </div>
            </div>
          </div>
        </form>           
      </div>
    </div>
  );
}

export default FullProfile;
