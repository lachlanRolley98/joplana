const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  curGoals: [
    {
      goalName: {
        type: String,
        required: true,
      },
      habits: [String], // Array of strings representing habits
    }
  ],
  dreamTriggers: {
    type: String,
    default: ''
  }
}, {
  timestamps: true,
  collection: 'users'
});

module.exports = mongoose.model('User', userSchema);
