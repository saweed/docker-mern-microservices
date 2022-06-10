const mongoose = require("mongoose");

const usertSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "User already exists."],
    required: [true, "User name must be given."],
  },
  name: {
    type: String,
    required: [true, "User name must be given."],
  },
  password: {
    type: String,
    required: [true, "User must have password"],
  },
});

const User = mongoose.model("User", usertSchema);

module.exports = User;
