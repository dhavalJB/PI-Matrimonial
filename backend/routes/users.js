// backend/routes/users.js

const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const User = require('../models/user.model');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads')); // File destination
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname); // File name
  }
});

const upload = multer({ storage: storage });

// Fetch user details by username
router.route('/:username').get((req, res) => {
  const { username } = req.params;
  User.findOne({ username })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json('User not found');
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Fetch user image by filename
router.route('/image/:filename').get((req, res) => {
  const { filename } = req.params;
  res.sendFile(path.join(__dirname, '..', 'uploads', filename));
});

// Fetch all users
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update or create user
router.route('/').post(upload.single('image'), async (req, res) => {
  const {
    uid,
    username,
    name,
    email,
    age,
    gender,
    height,
    weight,
    motherTongue,
    maritalStatus,
    religion,
    caste,
    bodyType,
    physicalStatus,
    eatingHabits,
    drinkingHabits,
    smokingHabits,
    education,
    educationDetail,
    employedIn,
    occupation,
    occupationDetail,
    annualIncome
  } = req.body;

  const imagePath = req.file ? '/uploads/' + req.file.filename : '';

  try {
    let user = await User.findOne({ uid });
    if (user) {
      // Update existing user
      user = await User.findOneAndUpdate(
        { uid },
        {
          username,
          name,
          email,
          age,
          gender,
          height,
          weight,
          motherTongue,
          maritalStatus,
          religion,
          caste,
          bodyType,
          physicalStatus,
          eatingHabits,
          drinkingHabits,
          smokingHabits,
          education,
          educationDetail,
          employedIn,
          occupation,
          occupationDetail,
          annualIncome,
          image: imagePath
        },
        { new: true }
      );
      return res.json(user);
    }
    // Create new user
    user = new User({
      uid,
      username,
      name,
      email,
      age,
      gender,
      height,
      weight,
      motherTongue,
      maritalStatus,
      religion,
      caste,
      bodyType,
      physicalStatus,
      eatingHabits,
      drinkingHabits,
      smokingHabits,
      education,
      educationDetail,
      employedIn,
      occupation,
      occupationDetail,
      annualIncome,
      image: imagePath
    });
    await user.save();
    res.json(user);
  } catch (error) {
    console.error('Error adding/updating user:', error);
    res.status(400).json('Error: ' + error);
  }
});

module.exports = router;
