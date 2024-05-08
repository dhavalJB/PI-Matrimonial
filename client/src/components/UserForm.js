import React, { useState } from 'react';
import axios from 'axios';
import './css/UserForm.css'; // Import the CSS file

function UserForm({ user }) {
  const [formData, setFormData] = useState({
    uid: user ? user.uid : '',
    username: user ? user.username : '',
    name: '',
    email: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    motherTongue: '',
    maritalStatus: '',
    religion: '',
    caste: '',
    bodyType: '',
    physicalStatus: '',
    eatingHabits: '',
    drinkingHabits: '',
    smokingHabits: '',
    education: '',
    educationDetail: '',
    employedIn: '',
    occupation: '',
    occupationDetail: '',
    annualIncome: ''
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = new FormData();
      userData.append('uid', formData.uid);
      userData.append('username', formData.username);
      userData.append('name', formData.name);
      userData.append('email', formData.email);
      userData.append('age', formData.age);
      userData.append('gender', formData.gender);
      userData.append('height', formData.height);
      userData.append('weight', formData.weight);
      userData.append('motherTongue', formData.motherTongue);
      userData.append('maritalStatus', formData.maritalStatus);
      userData.append('religion', formData.religion);
      userData.append('caste', formData.caste);
      userData.append('bodyType', formData.bodyType);
      userData.append('physicalStatus', formData.physicalStatus);
      userData.append('eatingHabits', formData.eatingHabits);
      userData.append('drinkingHabits', formData.drinkingHabits);
      userData.append('smokingHabits', formData.smokingHabits);
      userData.append('education', formData.education);
      userData.append('educationDetail', formData.educationDetail);
      userData.append('employedIn', formData.employedIn);
      userData.append('occupation', formData.occupation);
      userData.append('occupationDetail', formData.occupationDetail);
      userData.append('annualIncome', formData.annualIncome);
      if (image) {
        userData.append('image', image);
      }

      await axios.post('http://localhost:5000/api/users', userData);
      alert('User added successfully!');
      // Clear form after successful submission
      setFormData({
        uid: user ? user.uid : '',
        username: user ? user.username : '',
        name: '',
        email: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        motherTongue: '',
        maritalStatus: '',
        religion: '',
        caste: '',
        bodyType: '',
        physicalStatus: '',
        eatingHabits: '',
        drinkingHabits: '',
        smokingHabits: '',
        education: '',
        educationDetail: '',
        employedIn: '',
        occupation: '',
        occupationDetail: '',
        annualIncome: ''
      });
      setImage(null);
      setError('');
    } catch (error) {
      console.error('Error adding user:', error);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="user-form-container">
      <h3>Enter User Details</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <br />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          placeholder="Height"
          required
        />
        <br />
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Weight"
          required
        />
        <br />
        <input
          type="text"
          name="motherTongue"
          value={formData.motherTongue}
          onChange={handleChange}
          placeholder="Mother Tongue"
          required
        />
        <br />
        <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
        <br />
        <input
          type="text"
          name="religion"
          value={formData.religion}
          onChange={handleChange}
          placeholder="Religion"
          required
        />
        <br />
        <input
          type="text"
          name="caste"
          value={formData.caste}
          onChange={handleChange}
          placeholder="Caste"
          required
        />
        <br />
        <select name="bodyType" value={formData.bodyType} onChange={handleChange} required>
          <option value="">Select Body Type</option>
          <option value="Slim">Slim</option>
          <option value="Average">Average</option>
          <option value="Athletic">Athletic</option>
          <option value="Heavy">Heavy</option>
        </select>
        <br />
        <select name="physicalStatus" value={formData.physicalStatus} onChange={handleChange} required>
          <option value="">Select Physical Status</option>
          <option value="Normal">Normal</option>
          <option value="Physically Challenged">Physically Challenged</option>
        </select>
        <br />
        <select name="eatingHabits" value={formData.eatingHabits} onChange={handleChange} required>
          <option value="">Select Eating Habits</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
          <option value="Eggetarian">Eggetarian</option>
        </select>
        <br />
        <select name="drinkingHabits" value={formData.drinkingHabits} onChange={handleChange} required>
          <option value="">Select Drinking Habits</option>
          <option value="Doesn't Drink">Doesn't Drink</option>
          <option value="Drinks Socially">Drinks Socially</option>
          <option value="Drinks Regularly">Drinks Regularly</option>
        </select>
        <br />
        <select name="smokingHabits" value={formData.smokingHabits} onChange={handleChange} required>
          <option value="">Select Smoking Habits</option>
          <option value="Doesn't Smoke">Doesn't Smoke</option>
          <option value="Smokes Socially">Smokes Socially</option>
          <option value="Smokes Regularly">Smokes Regularly</option>
        </select>
        <br />
        <input
          type="text"
          name="education"
          value={formData.education}
          onChange={handleChange}
          placeholder="Education"
          required
        />
        <br />
        <input
          type="text"
          name="educationDetail"
          value={formData.educationDetail}
          onChange={handleChange}
          placeholder="Education in Detail"
          required
        />
        <br />
        <input
          type="text"
          name="employedIn"
          value={formData.employedIn}
          onChange={handleChange}
          placeholder="Employed in"
          required
        />
        <br />
        <input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder="Occupation"
          required
        />
        <br />
        <input
          type="text"
          name="occupationDetail"
          value={formData.occupationDetail}
          onChange={handleChange}
          placeholder="Occupation in Detail"
          required
        />
        <br />
        <input
          type="text"
          name="annualIncome"
          value={formData.annualIncome}
          onChange={handleChange}
          placeholder="Annual Income"
          required
        />
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <br />
        <button type="submit" disabled={loading}>Submit</button>
        {loading && <span>Loading...</span>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default UserForm;
