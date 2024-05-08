// backend/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  motherTongue: {
    type: String,
    required: true
  },
  maritalStatus: {
    type: String,
    required: true
  },
  religion: {
    type: String,
    required: true
  },
  caste: {
    type: String,
    required: true
  },
  bodyType: {
    type: String,
    required: true
  },
  physicalStatus: {
    type: String,
    required: true
  },
  eatingHabits: {
    type: String,
    required: true
  },
  drinkingHabits: {
    type: String,
    required: true
  },
  smokingHabits: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  educationDetail: {
    type: String,
    required: true
  },
  employedIn: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  occupationDetail: {
    type: String,
    required: true
  },
  annualIncome: {
    type: String,
    required: true
  },
  image: {
    type: String // Store image URL
  }
}, { collection: 'users' }); // Specify the collection name

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
