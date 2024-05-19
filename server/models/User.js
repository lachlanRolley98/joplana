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
  curGoals: {
    type: Map,
    of: new Schema({
      type: Map,
      of: String
    }),
    default: {}
  },
  dreamTriggers: {
    type: String,
    default: ''
  }


}, {timestamps: true,
    collection: 'users'
});

module.exports = mongoose.model('User', userSchema);