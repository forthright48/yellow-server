const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { // Username
    type: String,
    maxlength: 256,
    // validate: /^[A-Za-z_0-9.]+$/g,
  },
  dnd: {
    type: Boolean,
    default: false,
  },
  presence: {
    type: Boolean,
    default: false,
  },
  dndStartTime: Number, // In milliseconds
  dndLength: Number, // In seconds
  friends: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  }],
}, {
  timestamps: true,
});

mongoose.model('User', userSchema);
